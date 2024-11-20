import { ImageButton } from "./ImageButton"
import { TextButton } from "./TextButton"

interface Props {
  title1: string
  image1: string
  title2: string
  image2: string
  title3: string
  image3: string
  bgImage: string
}

export const Row3Categories = ({ title1, title2, title3, image1, image2, image3, bgImage }: Props) => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})`, backgroundPositionX: '50%', backgroundPositionY: '50%', 
        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: '#f6f8fa' }}
    >
      <div className='px-[15px] mt-[32px] max-w-[1390px] mx-auto'>
        <div className='flex flex-col min-[838px]:flex-row py-[24px]'>
          <div className='w-full min-[838px]:w-1/3'>
            <div className='p-[24px] my-[32px] mx-[12px] rounded-[8px] bg-white'>
              <div className='relative h-[300px]'>
                <ImageButton image={image1} title={title1} link={''}/>
              </div>
              <div>
                <TextButton text={title1} isHomePage={true} link={''}/>
              </div>
            </div>
          </div>

          <div className='w-full min-[838px]:w-1/3'>
            <div className='p-[24px] my-[32px] mx-[12px] rounded-[8px] bg-white'>
              <div className='relative h-[300px]'>
                <ImageButton image={image2} title={title2} link={''}/>
              </div>
              <div>
                <TextButton text={title2} isHomePage={true} link={''}/>
              </div>
            </div>
          </div>

          <div className='w-full min-[838px]:w-1/3'>
            <div className='p-[24px] my-[32px] mx-[12px] rounded-[8px] bg-white'>
              <div className='relative h-[300px]'>
                <ImageButton image={image3} title={title3} link={''}/>
              </div>
              <div>
                <TextButton text={title3} isHomePage={true} link={''}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
