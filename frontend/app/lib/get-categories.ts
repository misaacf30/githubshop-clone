import { query } from "./strapi";

const { STRAPI_HOST } = process.env

export function getCategories() {
    return query("product-categories?fields[0]=title&fields[1]=slug&populate[image][fields][0]=url&sort[0]=createdAt")
        .then(res => {
            return res.data.map((category : any) => {
                const { title, slug, image: rawImage } = category
                const image = `${STRAPI_HOST}/${rawImage.url}`
                return { title, slug, image }
            })
        })
}