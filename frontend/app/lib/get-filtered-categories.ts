import { query } from "./strapi";

interface Props {
    sizes: string | string[] | undefined
    colors: string | string[] | undefined
}

export function getFilteredCategories({ sizes, colors }: Props) {
    let url = 'product-categories?fields[0]=title&fields[1]=slug'       // &populate[image][fields][0]=url

    if (typeof (sizes) === 'string') url += `&filters[products][product_sizes][slug][$eq]=${sizes}`
    else if (Array.isArray(sizes)) sizes.map((size: string) => url += `&filters[products][product_sizes][slug][$eq]=${size}`)

    if (typeof (colors) === 'string') url += `&filters[products][product_colors][slug][$eq]=${colors}`
    else if (Array.isArray(colors)) colors.map((color: string) => url += `&filters[products][product_colors][slug][$eq]=${color}`)

    return query(url)
        .then(res => {
            return res.data.map((category: any) => {
                const { title, slug } = category
                return { title, slug }
            })
        })
}