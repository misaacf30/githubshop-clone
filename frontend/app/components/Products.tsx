import Image from "next/image"
import Link from "next/link"
import { Pagination } from "./Pagination"
import { SortBy } from "./SortBy"
import { SideFilterBar } from "./SideFilterBar"
import { SelectedFilters } from "./SelectedFilters"
import { NoSearchResults } from "./NoSearchResults"
import { MobileFilterBar } from "./MobileFilterBar"

interface Props {
    products: any
    pagination: any
    sortByValue: string | string[] | undefined
    showPerPageValue: string | string[] | undefined
    categoryList: any
    sizeList: any
    colorList: any
}

export const Products = ({ products, pagination, sortByValue, showPerPageValue, categoryList, sizeList, colorList }: Props) => {
    const currentPage = pagination.page || 1;
    const total = pagination.total;
    const start = (currentPage - 1) * pagination.pageSize + 1;
    const end = Math.min(start + pagination.pageSize - 1, total);

    return (
        <section className='flex flex-row mb-[16px]'>
            <div className='w-full min-[838px]:w-4/5 pb-[40px]'>
                <SelectedFilters page={pagination.page} />

                {
                    (products.length > 0)
                        ?
                        (
                            <>
                                <div className='flex justify-between min-[838px]:p-[10px] mb-[10px]'>
                                    <span className='max-[837px]:hidden text-[12px] text-[#4A4A4A] '>
                                        Items&nbsp;{start}-{end}&nbsp;of&nbsp;{total}
                                    </span>

                                    <div className='min-[838px]:hidden'>
                                        <MobileFilterBar categoryList={categoryList} sizeList={sizeList} colorList={colorList} />
                                    </div>

                                    <SortBy sortByValue={sortByValue} page={pagination.page} />
                                </div>

                                <div className='grid grid-cols-2 min-[640px]:grid-cols-3 '>
                                    {
                                        products.map((product: any, index: number) => (
                                            <div key={index} className='relative p-[10px] min-[838px]:ml-[8px] mb-[40px] border border-transparent hover:border-black/10 block'>
                                                <Link href={'/' + product.slug + '/' + product.documentId} className='group overflow-hidden block'>
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        unoptimized
                                                        width={400}
                                                        height={400}
                                                        objectFit='contain'
                                                        className='rounded-[8px] group-hover:scale-110 overflow-hidden'
                                                    />
                                                </Link>
                                                <div className='text-[16px] block'>
                                                    <h2 className='text-[#121212] font-extrabold my-[5px] block'>
                                                        <Link href={'/' + product.slug + '/' + product.documentId} className='hover:text- hover:underline underline-offset-1'>
                                                            {product.name}
                                                        </Link>
                                                    </h2>
                                                    <span className='text-[#000000] mb-[25px] pr-[3px] inline-block'>${product.price}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <Pagination page={pagination.page} pageSize={pagination.pageSize} pageCount={pagination.pageCount} total={pagination.total} showPerPageValue={showPerPageValue} />
                            </>
                        )
                        :
                        (
                            <NoSearchResults />
                        )
                }
            </div>

            <div className='max-[837px]:hidden min-[838px]:w-1/5 order-first'>      {/* products are loaded before filters, but not rendered before filters*/}
                <SideFilterBar categoryList={categoryList} sizeList={sizeList} colorList={colorList} page={pagination.page} />
            </div>
        </section >
    )
}
