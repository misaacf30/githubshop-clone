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
  const _params = await params
  const slug = _params.slug
  const { page, pageSize = PAGE_SIZE, sort, size, color } = await searchParams         // searchParams should be awaited before accessing properties
  const { products, pagination } = await getProducts({ slug, page, pageSize, sort, categories: undefined, sizes: size, colors: color })

  const filteredSizes = await getFilteredSizes({ categories: slug, colors: color })
  const filteredColors = await getFilteredColors({ categories: slug, sizes: size })

  if (products?.length === 0 && filteredSizes?.length === 0 && filteredColors?.length === 0) return notFound();
  else if (products?.length === 0 && (filteredSizes?.length > 0 || filteredColors?.length > 0))
    return (
      <div className='px-[16px] pt-[30px] pb-[40px] max-w-[1390px] mx-auto text-center'>
        <h2 className='text-[24px] font-medium mt-[70px] mb-[10px]'>
          Sorry. We couldn't find the page you're looking for.
        </h2>
        <p className='text-[16px] mb-[100px]'>
          {'< '} Go back or see similar products below
        </p>
      </div>
    )

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
