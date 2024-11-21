import { ImageButton } from './ImageButton'
import { Button } from './Button'

interface Props {
  title: string
  description: string
  button: string
  image: string
  rightSide: boolean
  bgImage: any
}

export const Hero = ({ title, description, button, image, rightSide, bgImage }: Props) => {
  return (
    <section className='pb-[16px]'
      style={{ backgroundImage: `url(${bgImage})`, backgroundPositionX: '0%', backgroundPositionY: '50%', 
        backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
    >
      <div className='px-[15px] max-w-[1390px] mx-auto'>
        <div className={`flex flex-wrap items-stretch py-[16px] mb-[48px] ${!rightSide && 'flex-row-reverse'} `}>
          <div className={`w-full min-[838px]:w-1/2  ${!rightSide && 'min-[838px]:pl-[16px]'} `}> {/* Image */}
            <div className='relative h-[320px]'>
              <ImageButton image={image} title={title} link={''} />
            </div>

          </div>

          <div className={`w-full min-[838px]:w-1/2 min-[838px]:px-[16px] flex flex-col self-stretch justify-center ${!rightSide && 'min-[838px]:pl-0'} `}> {/* Details */}
            <div className='my-[16px] '>
              <h1 className=' font-extrabold text-[40px]'>
                {title}
              </h1>
              <p className={`text-[14px] text-[#4A4A4A] pb-[16px] ${!rightSide && 'text-[16px]'} tracking-[0.5px]`}>
                {description}
              </p>
            </div>
            <div className='block max-w-full tracking-[0.5px]'>
              <Button text={button} link='/shop-by-category' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
