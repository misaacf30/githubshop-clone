import { query } from "./strapi";

const { STRAPI_HOST } = process.env

// export function getProducts ( { categoryId } : { categoryId: string} ) {
//     return query("products?filters[product_category][slug][$contains]=shirts")
//         .then(res => {
//             const { data, meta } = res

//             const products = data.map((product : any)=> {
//                 const { name, slug, description, image: rawImage, price} = product
//                 const image = `${STRAPI_HOST}/${rawImage.url}`
//                 return { name, slug, description, image, price}
//             })
            
//             return { products, pagination: meta.pagination }
//         })
// }

export function getProducts() {
    return query("products?populate[product_sizes][fields][0]=name&populate[product_sizes][fields][1]=code&populate[images][fields][0]=url")
        .then(res => {
            const { data, meta } = res

            const products = data.map((product : any) => {
                const { name, slug, isActive, price, description, color, images: rawImage, stock, product_sizes } = product
                const image = `${STRAPI_HOST}/${rawImage[0].url}`
                return {  name, slug, isActive, price, description, color, image, stock, product_sizes }
            })

            return { products, pagination: meta.pagination }
        })
}