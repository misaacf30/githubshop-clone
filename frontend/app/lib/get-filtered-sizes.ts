import { query } from "./strapi";

interface Props {
    categories: string | string[] | undefined
    colors: string | string[] | undefined
}

export function getFilteredSizes({ categories, colors }: Props) {
    let url = 'product-sizes?fields[0]=name&fields[1]=code&fields[2]=slug'

    if (typeof (categories) === 'string') url += `&filters[products][product_category][slug][$eq]=${categories}`
    else if (Array.isArray(categories)) categories.map((category: string) => url += `&filters[products][product_category][slug][$eq]=${category}`)

    if (typeof (colors) === 'string') url += `&filters[products][product_colors][slug][$eq]=${colors}`
    else if (Array.isArray(colors)) colors.map((color: string) => url += `&filters[products][product_colors][slug][$eq]=${color}`)

    return query(url)
        .then(res => {
            return res.data.map((size: any) => {
                const { name, code, slug } = size
                return { name, code, slug }
            })
        })
}