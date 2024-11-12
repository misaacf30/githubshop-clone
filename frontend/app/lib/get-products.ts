import { query } from "./strapi";

const { STRAPI_HOST } = process.env

export function getProducts ( { categoryId } : { categoryId: string} ) {
    return query("products?filters[product_category][slug][$contains]=shirts")
        .then(res => {
            const { data, meta } = res

            const products = data.map((product : any)=> {
                const { name, slug, description, image: rawImage, price} = product
                const image = `${STRAPI_HOST}/${rawImage.url}`
                return { name, slug, description, image, price}
            })
            
            return { products, pagination: meta.pagination }
        })
}