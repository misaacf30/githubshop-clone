import Link from "next/link";
import { getCategories } from "../lib/get-categories";
import { getProducts } from "../lib/get-products";
import { Products } from "../components/Products";
import { Categories } from "../components/Categories";

const PAGE_SIZE = '6'

export default async function ShopByCategory( 
    { searchParams } : 
    { searchParams: { [key: string]: string | string[] | undefined } }
) {
    const { page, pageSize = PAGE_SIZE } = await searchParams         // searchParams should be awaited before accessing properties
    const categories = await getCategories()
    const { products, pagination } = await getProducts( { slug: '', page, pageSize: PAGE_SIZE} )    // delete pageSize const if not used ^^^

    if (categories === null && products === null) return null

    return (
        <div className='px-[15px] max-w-[1390px] mx-auto'>
            <div className='text-[12px]'>
                <Link href='/' className='text-[#505050] underline underline-offset-1'>
                    Home
                </Link>
                &nbsp;&nbsp;{'>'}&nbsp; &nbsp;
                <span>Shop all</span>
            </div>

            <div className='pt-[16px]'>
                <h1 className='text-[48px] font-extrabold mb-[40px]'>
                    Shop all
                </h1>
            </div>

            <Categories categories={categories} />

            <Products products={products} pagination={pagination} />

        </div >
    )
}
