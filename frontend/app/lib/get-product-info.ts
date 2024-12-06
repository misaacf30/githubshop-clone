import { query } from "./strapi";

const { STRAPI_HOST } = process.env

export function getProductInfo({ documentId }: { documentId: string }) {
    let url = `products/${documentId}?populate[images][fields]=url&populate[product_category][fields][0]=title&populate[product_category][fields][1]=slug&populate[product_sizes][fields]=code`

    return query(url)
        .then(res => {
            const { data  } = res

            if(data === null) return null;      // ***** return null if data is null ??? *******

            const { name, price, images: rawImages, description, product_category, product_sizes, stock } = data
            const image = `${STRAPI_HOST}/${rawImages[0].url}`

            return { name, price, image, description, product_category, product_sizes, stock }
        })
}