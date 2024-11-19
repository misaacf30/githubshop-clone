import Image from "next/image";
import { ImageButton } from "../components/ImageButton";
import { TextButton } from "../components/TextButton";

export default async function ShopByCategory() {
    return (
        <div className='px-[15px] max-w-[1390px] mx-auto'>
            <div>
                Home {'>'} Shop all
            </div>

            <div className='pt-[16px]'>
                <h1 className='text-[48px] font-extrabold mb-[40px]'>
                    Shop all
                </h1>
            </div>

            <div className='flex flex-col'>
                <div className='flex flex-wrap min-[838px]:'>
                    {
                        Array.from({ length: 6 }, (_, index) => (
                            <div className='w-full min-[838px]:w-1/3 mb-[8px] min-[838px]:pr-[16px]'>  {/* category 1 */}
                                <div className='relative h-[300px] '>
                                    {/* <ImageButton image={image1} title={title1} /> */}
                                    <ImageButton image={'https://www.thegithubshop.com/media/wysiwyg/29681_GitHub_Mbanner_Tshirt.jpg'} title={'title'} />
                                </div>
                                <div className='block' >
                                    <TextButton text={'Shirts'} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <div className='flex flex-row'>
                    <div className='w-1/5'>
                        Shopping options
                    </div>
                    <div className='w-4/5'>
                        <div>Items 1-12 of 98</div>
                        <div className='flex flex-wrap'>
                            {
                                Array.from({ length: 9 }, (_, index) => (
                                    <div key={index} className='w-1/3'>
                                        <div className='relative h-[250px]'>
                                            <Image
                                                src={'https://www.thegithubshop.com/media/catalog/product/1/5/1547509_z_3b5c.jpg'}
                                                alt={'title'}
                                                unoptimized
                                                fill
                                                objectFit='cover'
                                                className='rounded-[8px]'
                                            />
                                        </div>
                                        <div>
                                            <h2>Github Sticker Pack</h2>
                                            <p>$5.00</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
