import { Categories } from "./components/Categories";
import { Hero } from "./components/Hero";
import { Row2Categories } from "./components/Row2Categories";
import { Row3Categories } from "./components/Row3Categories";
import { getHomeInfo } from './lib/get-home-info'

const { STRAPI_HOST } = process.env

export default async function Home() {
  const { title, hero1, hero2, row2categories, row3categories  } = await getHomeInfo()

  return (
    <div className='pb-[40px]'>
      <Hero 
        title={hero1.title} description={hero1.description} image={`${STRAPI_HOST}/${hero1.image.url}`} 
        button={hero1.button} rightSide={true} bgImage=''
      />
      <Hero 
        title={hero2.title} description={hero2.description} image={`${STRAPI_HOST}/${hero2.image.url}`} 
        button={hero2.button} rightSide={false} bgImage={`${STRAPI_HOST}/${row3categories.bgImage.url}`}
      />
      <Row2Categories 
        title1={row2categories.firstCategory.title} description1={row2categories.firstCategory.description} 
        image1={`${STRAPI_HOST}/${row2categories.firstCategory.image.url}`} 
        title2={row2categories.secondCategory.title} description2={row2categories.secondCategory.description} 
        image2={`${STRAPI_HOST}/${row2categories.secondCategory.image.url}`} 
      />
      <Row3Categories 
        title1={row3categories.firstCategory.title} image1={`${STRAPI_HOST}/${row3categories.firstCategory.image.url}`} 
        title2={row3categories.secondCategory.title} image2={`${STRAPI_HOST}/${row3categories.secondCategory.image.url}`} 
        title3={row3categories.thirdCategory.title} image3={`${STRAPI_HOST}/${row3categories.thirdCategory.image.url}`} 
        bgImage={`${STRAPI_HOST}/${row3categories.bgImage.url}`}
      />
    </div>
  );
}
