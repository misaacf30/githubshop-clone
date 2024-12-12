'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation"


interface Props {
    page: number
}

export const SelectedFilters = ({ page }: Props) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const newParams = new URLSearchParams(searchParams);

    if (!newParams.has('category') && !newParams.has('size') && !newParams.has('color')) return null;

    // for (const [key, value] of searchParams.entries()) {
    //     console.log(key, value);
    // }

    const handleLink = (filterType: string, slug: string) => {
        const newParams = new URLSearchParams(searchParams);

        if (page > 1)
            newParams.delete('page');

        if (!newParams.has(filterType, slug))
            newParams.append(filterType, slug);
        else
            newParams.delete(filterType, slug);

        return "?" + decodeURIComponent(newParams.toString());
    }

    return (
        <ul className='flex flex-wrap items-center pt-[10px] pl-[10px] mb-[12px]'>
            <li className='text-[12px] text-[#414141] font-semibold mr-[10px] mb-[10px]'>
                <span className='py-[4px]'>
                    Filters:
                </span>
            </li>
            {searchParams.getAll('category').map((category: string) => (
                <li className='border rounded-[4px] mr-[10px] mb-[10px]' key={category}>
                    <Link
                        href={handleLink('category', category)}
                        scroll={false}
                        className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                    >
                        {category}&nbsp;&nbsp;
                        <span className='text-[#4a4a4a] font-medium'>X</span>
                    </Link>
                </li>
            ))}
            {searchParams.getAll('size').map((size: string) => (
                <li className='border rounded-[4px] mr-[10px] mb-[10px]' key={size}>
                    <Link
                        href={handleLink('size', size)}
                        scroll={false}
                        className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                    >
                        {size.toUpperCase()}&nbsp;&nbsp;
                        <span className='text-[#4a4a4a] font-medium'>X</span>
                    </Link>
                </li>
            ))}
            {searchParams.getAll('color').map((color: string) => (
                <li className='border rounded-[4px] mr-[10px] mb-[10px]' key={color}>
                    <Link
                        href={handleLink('color', color)}
                        scroll={false}
                        className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                    >
                        {color}&nbsp;&nbsp;
                        <span className='text-[#4a4a4a] font-medium'>X</span>
                    </Link>
                </li>
            ))}
            <li className=' mr-[10px] mb-[10px]'>
                <Link
                    href={pathname}
                    scroll={false}
                    className='text-[12px] text-[#4a4a4a] decoration-[#4a4a4a] underline py-[4px]'
                >
                    Clear all
                </Link>
            </li>
        </ul>
    )
}
