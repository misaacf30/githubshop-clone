import Link from "next/link"
import { ImageButton } from "./ImageButton"
import { TextButton } from "./TextButton"

interface Props {
    title1: string
    description1: string
    image1: string
    title2: string
    description2: string
    image2: string
}

export const Row2Categories = ( { title1, description1, image1, title2, description2, image2 } : Props ) => { 
  return (
    <section className='px-[15px] max-w-[1390px] mx-auto'>
        <div className='flex flex-col min-[838px]:flex-row pt-[48px] '>
            <div className='w-full min-[838px]:w-1/2 mb-[8px] min-[838px]:pr-[16px]'>  {/* category 1 */}
                <div className='relative h-[300px] '>
                    <ImageButton image={image1} title={title1}/>
                </div>
                <div className='block' >
                    <TextButton text={title1} />
                </div>
                <div className='block'>
                    <p className='text-[16px] text-[#4A4A4A] mb-[10px] inline-block tracking-[0.5px]'>
                        {description1}
                    </p>
                </div>
            </div>


            <div className='w-full min-[838px]:w-1/2 mb-[8px] min-[838px]:pl-[16px]'>  {/* category 2 */}
                <div className='relative h-[300px] '>
                    <ImageButton image={image2} title={title2} />
                </div>
                <div className='block' >
                    <TextButton text={title2} />
                </div>
                <div className='block'>
                    <p className='text-[16px] text-[#4A4A4A] mb-[10px] inline-block tracking-[0.5px]'>
                        {description2} 
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
