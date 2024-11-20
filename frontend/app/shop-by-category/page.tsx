import Image from "next/image";
import { ImageButton } from "../components/ImageButton";
import { TextButton } from "../components/TextButton";
import Link from "next/link";
import { getCategories } from "../lib/get-categories";

export default async function ShopByCategory() {
    const categories = await getCategories()

    if (categories === null) return null

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

            <div className='flex flex-col'>
                <div className='flex flex-wrap min-[838px]:'>
                    {
                        categories.map((category : any, index : number) => (
                            <div key={index} className='w-full min-[838px]:w-1/3 mb-[8px] min-[838px]:pr-[16px]' > {/* category 1 */}
                                < div className='relative h-[300px] ' >
                                    <ImageButton image={category.image} title={category.title} link={`shop-by-category/${category.slug}`} />
                                </div>
                                <div className='block' >
                                    <TextButton text={category.title} isHomePage={false} link={`shop-by-category/${category.slug}`} />
                                </div>
                            </div>
                        ))


                    }
                </div>
            </div >

            <div>
                <div className='flex flex-row'>
                    <div className='w-1/5'>
                        Shopping options
                    </div>
                    <div className='w-4/5'>
                        <div>Items 1-12 of 98</div>
                        <div className='grid grid-cols-3 '>
                            {
                                Array.from({ length: 9 }, (_, index) => (
                                    <div key={index} className='relative p-[10px] min-[838px]:ml-[8px] mb-[40px] border border-transparent hover:border-black/10 block'>
                                        <Link href={''} className='group overflow-hidden block'>
                                            <Image
                                                src={'https://www.thegithubshop.com/media/catalog/product/1/5/1547509_z_3b5c.jpg'}
                                                alt={'title'}
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
                                                    Github Sticker Pack
                                                </Link>
                                            </h2>
                                            <span className='text-[#000000] mb-[25px] pr-[3px] inline-block'>$5.00</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
