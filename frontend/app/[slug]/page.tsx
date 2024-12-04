import Image from "next/image"
import Link from "next/link";

export default async function Product( { params }: { params: { slug: string } }) {
  const slug = params.slug


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
          <Link href='/shirts' className='text-[#505050] underline underline-offset-1'>
            Shirts
          </Link>
          &nbsp;&nbsp;{'>'}&nbsp; &nbsp;
          <span className='capitalize'>{slug}</span>
      </div>

      <main className='grid grid-cols-2'> 
        <div className='border border-black'>
          <Image
            // src={product.image}
            // alt={product.name}
            unoptimized 
            width={400}
            height={400}
            objectFit='contain'
            className='w-full'
          />
        </div>

        <div className=''>
          <div>
            <h1>{slug}</h1>
          </div>

          <div className='flex justify-between'>
            <div>
              $10.00
            </div>
            <div>
              In stock
            </div>
          </div>

          <div className='flex'>
            <div>
              - 1 +
            </div>
            <div>
              Add to cart
            </div>
          </div>

          <div>
            Description ...
          </div>

        </div>
      </main>

    </div>
  )
}
