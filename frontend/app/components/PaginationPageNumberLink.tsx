import Link from "next/link"

interface Props {
    page: number
    item: any
    index: number
    searchParams: any
}

export const PaginationPageNumberLink = ({ page, item, index, searchParams }: Props) => {
    const newParams = new URLSearchParams(searchParams);

    if (index > 1)
        newParams.set('page', index.toString());
    else
        newParams.delete('page');

    let params = "?" + decodeURIComponent(newParams.toString());

    if (typeof (item) !== 'number')
        return (
            <Link
                href={'shop-by-category' + params}
                className={'flex items-center justify-center px-2 h-8 text-xl bg-transparent rounded-3xl hover:bg-gray-900 hover:text-white'}
            >
                {item}
            </Link>
        )

    else if (page !== index)
        return (
            <Link
                href={'shop-by-category' + params}
                className={'mx-[5px] px-[10px] py-[8px] rounded-[30px] hover:text-black/70'}
            >
                {item}&nbsp;
            </Link>
        )

    else
        return (
            <span className="mx-[5px] px-[10px] py-[8px] rounded-[30px] border border-black font-semibold ">{item}&nbsp;</span>
        )
}
