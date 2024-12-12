import { QuantityField } from "@/app/components/QuantityField";
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

          {(sizes.length > 0) &&
            <div className='my-[20px]'>
              <div className='pl-[2px]'>
                <div>
                  <h4 className='text-[14px] text-[#4A4A4A]'>Size</h4>
                </div>
                <div className='flex flex-wrap mt-[10px]'>
                  {sizes.map((size: any, index: number) => (
                    <span key={index} className='text-[12px] text-[#686868] font-semibold bg-[#f0f0f0] flex items-center justify-center 
                    rounded-[50%] outline outline-[0px] outline-[#686868] outline-offset-1 hover:outline-[1px] cursor-pointer
                    w-[43px] h-[43px] min-w-[43px] ml-[5px] mr-[15px] mb-[5px]'
                    >
                      {size.code}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          }

          <QuantityField stock={stock} />

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
