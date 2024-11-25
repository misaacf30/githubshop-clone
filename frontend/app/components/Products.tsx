import Image from "next/image"
import Link from "next/link"
import { Pagination } from "./Pagination"
import { SortBy } from "./SortBy"

interface Props {
    products: any
    pagination: any
    sortValue: string | string[] | undefined
}

export const Products = ({ products, pagination, sortValue }: Props) => {
    const currentPage = pagination.page || 1;
    const total = pagination.total
    const start = (currentPage - 1) * pagination.pageSize + 1;
    const end = Math.min(start + pagination.pageSize - 1, total);

    return (
        <section className='flex flex-row mb-[16px] min-[838px]:pr-[15px]'>
            <div className='w-1/5'>
                <strong>Shopping options</strong>
                <div>
                    <div>
                        <h3>Category</h3>
                    </div>
                    <div>
                        <h3>Size</h3>
                    </div>
                    <div>
                        <h3>Color</h3>
                    </div>
                </div>
            </div>
            <div className='w-5/5 pb-[40px]'>

                <div className='flex justify-between p-[10px] mb-[30px]'>
                    <span className='text-[12px] text-[#4A4A4A] '>
                        Items&nbsp;{start}-{end}&nbsp;of&nbsp;{total}
                    </span>

                    <SortBy selectedValue={sortValue} />
                </div>


                <div className='grid grid-cols-3 '>
                    {
                        products.map((product: any, index: number) => (
                            <div key={index} className='relative p-[10px] min-[838px]:ml-[8px] mb-[40px] border border-transparent hover:border-black/10 block'>
                                <Link href={''} className='group overflow-hidden block'>
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
                                        <Link href={''} className='hover:text- hover:underline underline-offset-1'>
                                            {product.name}
                                        </Link>
                                    </h2>
                                    <span className='text-[#000000] mb-[25px] pr-[3px] inline-block'>${product.price}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Pagination page={pagination.page} pageSize={pagination.pageSize} pageCount={pagination.pageCount} total={pagination.total} />

            </div>
        </section>
    )
}
