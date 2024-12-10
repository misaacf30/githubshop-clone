import { Products } from "@/app/components/Products";
import { getFilteredColors } from "@/app/lib/get-filtered-colors";
import { getFilteredSizes } from "@/app/lib/get-filtered-sizes";
import { getProducts } from "@/app/lib/get-products";
import Link from "next/link";
import { notFound } from "next/navigation";

const PAGE_SIZE = '9'

export default async function Page(
  { params, searchParams }:
    { params: { slug: string }, searchParams: { [key: string]: string | string[] | undefined } }
) {
  const slug = await params.slug
  const { page, pageSize = PAGE_SIZE, sort, size, color } = await searchParams         // searchParams should be awaited before accessing properties
  const { products, pagination } = await getProducts({ slug, page, pageSize, sort, categories: undefined, sizes: size, colors: color })

  if (products === null || products.length === 0) return notFound();

  const filteredSizes = await getFilteredSizes({ categories: slug, colors: color })
  const filteredColors = await getFilteredColors({ categories: slug, sizes: size })

  return (
    <div className='px-[15px] max-w-[1390px] mx-auto'>
      <div className='text-[12px]'>
        <Link href='/' className='text-[#505050] underline underline-offset-1'>
          Home
        </Link>
        &nbsp;&nbsp;{'>'}&nbsp; &nbsp;
        <Link href='/shop-by-category' className='text-[#505050] underline underline-offset-1'>
          Shop all
        </Link>
        &nbsp;&nbsp;{'>'}&nbsp; &nbsp;
        <span className='capitalize'>{slug}</span>
      </div>

      <div className='pt-[16px]'>
        <h1 className='text-[48px] font-extrabold mb-[40px] capitalize'>
          {slug}
        </h1>
      </div>

      <Products products={products} pagination={pagination} sortByValue={sort} showPerPageValue={pageSize} categoryList={undefined} sizeList={filteredSizes} colorList={filteredColors} />
    </div>
  )
}
