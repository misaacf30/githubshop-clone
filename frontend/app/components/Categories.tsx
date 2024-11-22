import { ImageButton } from "./ImageButton"
import { TextButton } from "./TextButton"



export const Categories = ( { categories } : { categories : any } ) => {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-wrap  mt-[10px] mb-[22px]'>
        {
          categories.map((category: any, index: number) => (
            <div key={index} className='w-full min-[838px]:w-1/3 mb-[8px] min-[838px]:pr-[16px]'>
              < div className='relative h-[300px] ' >
                <ImageButton image={category.image} title={category.title} link={`shop-by-category/${category.slug}`} />
              </div>
              <div className='block pl-[8px]' >
                <TextButton text={category.title} isHomePage={false} link={`shop-by-category/${category.slug}`} />
              </div>
            </div>
          ))


        }
      </div>
    </section >
  )
}
