import { query } from "./strapi";

const { STRAPI_HOST } = process.env

interface Props {
    slug: string
    pageSize: string | string[] | undefined
    page: string | string[] | undefined
    sort: string | string[] | undefined
}

export function getProducts( { slug, pageSize, page, sort} : Props ) {
    let url = slug === '' 
        ? 'products?fields[0]=name&fields[1]=slug&fields[2]=isActive&fields[3]=price&populate[images][fields][0]=url'
        : `products?filters[product_category][slug][$contains]=${slug}&populate[product_sizes][fields][0]=name&populate[product_sizes][fields][1]=code&populate[images][fields][0]=url`
        
    if(page) url += `&pagination[page]=${page}`
    if(pageSize) url += `&pagination[pageSize]=${pageSize}`
    if(sort) url += `&sort=${sort}`

    return query(url)
        .then(res => {
            const { data, meta } = res

            const products = data.map((product : any) => {
                const { name, slug, isActive, price, description, color, images: rawImages, stock, product_sizes } = product
                const image = `${STRAPI_HOST}/${rawImages[0].url}`
                return {  name, slug, isActive, price, description, color, image, stock, product_sizes }
            })

            return { products, pagination: meta.pagination }
        })
}