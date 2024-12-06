import { query } from "./strapi";

const { STRAPI_HOST } = process.env

interface Props {
    slug: string
    pageSize: string | string[] | undefined
    page: string | string[] | undefined
    sort: string | string[] | undefined
    categories: string | string[] | undefined
    sizes: string | string[] | undefined
    colors: string | string[] | undefined
}

export function getProducts({ slug, pageSize, page, sort, categories, sizes, colors }: Props) {
    let url =
        (slug === '')
            ? 'products?fields[0]=name&fields[1]=slug&fields[2]=isActive&fields[3]=price&populate[images][fields][0]=url'       // *** FILTER ISACTIVE = TRUE !
            : `products?filters[product_category][slug][$contains]=${slug}&populate[images][fields][0]=url&fields[0]=name&fields[1]=slug&fields[2]=isActive&fields[3]=price`

    if (page) url += `&pagination[page]=${page}`
    if (pageSize && pageSize !== 'all') url += `&pagination[pageSize]=${pageSize}`      // pageSize='all' same as pageSize=total 
    if (sort) url += `&sort=${sort}`


    if (typeof (categories) === 'string') url += `&filters[product_category][slug][$eq]=${categories}`
    else if (Array.isArray(categories)) categories.map((category: string) => url += `&filters[product_category][slug][$eq]=${category}`)

    if (typeof (sizes) === 'string') url += `&filters[product_sizes][slug][$eq]=${sizes}`         // product_sizes instead of product_size becasue a product may have multiple sizes *
    else if (Array.isArray(sizes)) sizes.map((size: string) => url += `&filters[product_sizes][slug][$eq]=${size}`)

    if (typeof (colors) === 'string') url += `&filters[product_colors][slug][$eq]=${colors}`
    else if (Array.isArray(colors)) colors.map((color: string) => url += `&filters[product_colors][slug][$eq]=${color}`)

    return query(url)
        .then(res => {
            const { data, meta } = res

            const products = data.map((product: any) => {
                const { name, slug, isActive, documentId, price, images: rawImages } = product
                const image = `${STRAPI_HOST}/${rawImages[0].url}`
                return { name, slug, documentId, isActive, price, image }
            })

            return { products, pagination: meta.pagination }
        })
}