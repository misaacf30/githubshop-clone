import { query } from "./strapi";

interface Props {
    categories: string | string[] | undefined
    sizes: string | string[] | undefined
}

export function getFilteredColors({ categories, sizes }: Props) {
    let url = 'product-colors?fields[0]=name&fields[1]=slug'

    if (typeof (categories) === 'string') url += `&filters[products][product_category][slug][$eq]=${categories}`
    else if (Array.isArray(categories)) categories.map((category: string) => url += `&filters[products][product_category][slug][$eq]=${category}`)

    if (typeof (sizes) === 'string') url += `&filters[products][product_sizes][slug][$eq]=${sizes}`
    else if (Array.isArray(sizes)) sizes.map((size: string) => url += `&filters[products][product_sizes][slug][$eq]=${size}`)

    return query(url)
        .then(res => {
            return res.data.map((color: any) => {
                const { name, slug } = color
                return { name, slug }
            })
        })
}