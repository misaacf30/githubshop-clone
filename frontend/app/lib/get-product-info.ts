import { query } from "./strapi";

const { STRAPI_HOST } = process.env

interface Props {
    slug: string,
}

export function getProductInfo({ slug }: Props) {
    let url = "products?filters[slug][$eq]=" + slug

    return query(url)
        .then(res => {
            const { data, meta } = res

            const products = data.map((product: any) => {
                const { name, slug, price, images: rawImages, product_category, product_sizes, stock } = product
                const image = `${STRAPI_HOST}/${rawImages[0].url}`
                return { name, slug, price, image, product_category, product_sizes, stock }
            })

            return { products, pagination: meta.pagination }
        })
}