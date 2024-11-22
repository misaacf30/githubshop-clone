import Image from "next/image"
import Link from "next/link"
import { Pagination } from "./Pagination"

interface Props {
    products: any,
    pagination: any
}

export const Products = ({ products, pagination }: Props) => {

    return (
        <section className='flex flex-row mb-[16px]'>
            <div className='w-1/5'>
                Shopping options
            </div>
            <div className='w-4/5 pb-[40px]'>              

                <span className='text-[12px] text-[#4A4A4A] '>
                    {'Items'}&nbsp;
                    <span className=' '>
                        {(pagination.page - 1) * pagination.pageSize + 1}
                    </span>&nbsp;
                    {'-'}&nbsp;
                    <span className=''>
                        {(pagination.page - 1) * pagination.pageSize + pagination.pageSize}
                    </span>&nbsp;
                    {'of'}&nbsp;
                    <span className=' '>
                        {pagination.total}
                    </span>
                </span>

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
