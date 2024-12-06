import { getProductInfo } from "@/app/lib/get-product-info";
import Image from "next/image"
import Link from "next/link";

export default async function Product(
  { params }:
    { params: { slug: string, documentId: string } }
) {
  const { slug, documentId } = params

  const product = await getProductInfo({ documentId });

  if (product === null) return null;

  const { name, price, image, description, product_category: category, product_sizes: sizes, stock } = product;



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
        <Link
          href={'/shop-by-category/' + category.slug}
          className='text-[#505050] underline underline-offset-1'
        >
          {category.title}
        </Link>
        &nbsp;&nbsp;{'>'}&nbsp; &nbsp;
        <span className='capitalize'>{slug}</span>
      </div>

      <main className='grid grid-cols-2'>

        {/* Product image */}
        <div className='border border-black'>
          <Image
            src={image}
            alt={''}
            unoptimized
            width={1400}
            height={1400}
            objectFit='contain'
            className='w-full'
          />
        </div>

        {/* Product info */}
        <div className='flex flex-col'>
          <div className=''>
            <h1 className='text-[48px] text-[#23382E] font-extrabold mb-[15px]'>{name}</h1>
          </div>

          <div className='flex justify-between border-b border-[#c1c1c1] mb-[15px]'>
            <div>
              <span className='text-[36px] text-[#000000] font-medium '>${price.toFixed(2)}</span>
            </div>

              <div>
                <span className='text-[14px] text-[#575757] font-semibold'>
                  {stock > 0 ? 'In stock' : 'Out of stock'}
                </span>
              </div>
          </div>

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

          <div className='flex'>
            <div className='mb-[20px]'>
              <div className=' border border-[#cccccc] rounded-[8px] mr-[20px]'>
                <button className='text-[25px] text-[#8A8A8A] font-extrabold px-[15px] py-[7px]'>
                  -
                </button>
                <input
                  type="number"
                  id=""
                  value={1}
                  className='[&::-webkit-inner-spin-button]:appearance-none text-[14px] text-center w-[54px] h-[48px] px-[6px] py-[14px]'
                />
                <button className='text-[25px] text-[#8A8A8A] font-extrabold px-[15px] py-[7px]'>
                  +
                </button>
              </div>
            </div>

            <button>
              Add to cart
            </button>
          </div>

          <div>
            {description}
          </div>

        </div>
      </main>

    </div>
  )
}
