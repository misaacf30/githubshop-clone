import { ProductInteractiveComponents } from "@/app/components/ProductInteractiveComponents";
import { getProductInfo } from "@/app/lib/get-product-info";
import Image from "next/image"
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Product(
  { params }:
    { params: { slug: string, documentId: string } }
) {   
  const { slug, documentId } = await params

  const product = await getProductInfo({ documentId });

  if (product === null) notFound();

  const { name, price, image, description, product_category: category, product_sizes: sizes, stock } = product;  

  return (
    <div className='px-[15px] max-w-[1390px] mx-auto'>
      <div className='text-[12px] py-[16px] mb-[10px]'>
        <Link href='/' className='text-[#505050] underline underline-offset-1'>
          Home
        </Link>
        &nbsp;&nbsp;{'>'}&nbsp; &nbsp;
        <Link href='/shop-by-category' className='text-[#505050] underline underline-offset-1'>
          Shop all
        </Link>
        &nbsp;&nbsp;{'>'}&nbsp; &nbsp;
        <Link
          href={'/shop-by-category/' + category.slug}
          className='text-[#505050] underline underline-offset-1'
        >
          {category.title}
        </Link>
        &nbsp;&nbsp;{'>'}&nbsp; &nbsp;
        <span className='capitalize'>{slug}</span>
      </div>

      <main className='grid min-[838px]:grid-cols-2 py-[16px] min-[838px]:py-[64px]'>

        {/* Product image */}
        <div className='min-[838px]:mb-[100px]'>
          <div className='mx-[60px]'>
            <Image
              src={image}
              alt={slug}
              unoptimized
              width={1400}
              height={1400}
              objectFit='contain'
              className='w-full'
            />
          </div>
        </div>

        {/* Product info */}
        <div className='flex flex-col mt-[30px] mb-[60px] min-[838px]:mt-[60px]'>
          <div className=''>
            <h1 className='text-[20px] min-[838px]:text-[48px] text-[#23382E] font-extrabold mb-[15px]'>{name}</h1>
          </div>

          <div className='flex justify-between border-b border-[#c1c1c1] mb-[25px]'>
            <div>
              <span className='text-[22px] min-[838px]:text-[36px] text-[#000000] font-medium '>${price.toFixed(2)}</span>
            </div>

            <div className='flex flex-col'>
              <span className='text-[14px] text-[#575757] font-semibold'>
                {stock > 0 ? 'In stock' : 'Out of stock'}
              </span>
              {(stock > 0 && stock <= 10) &&
                <span className='text-[14px] text-[#575757] font-normal'>
                  Only {stock} left
                </span>
              }

            </div>
          </div>


          <ProductInteractiveComponents sizes={sizes} stock={stock} documentId={documentId} name={name} price={price} image={image} />

          <div className='mt-[20px] mb-[10px]'>
            <p className='text-[14px] text-[#4a4a4a]'>
              {description}
            </p>
          </div>

        </div>
      </main>

    </div>
  )
}
