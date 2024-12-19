'use client'

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    sortByValue: string | string[] | undefined
    page: number
}

export const SortBy = ( { sortByValue, page } : Props ) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (event: any) => {
        const newParams = new URLSearchParams(searchParams);
        const selectedValue = event.target.value;

        if (page > 1) //  newParams.get('page') -> Only if param page=1 does not exist
            newParams.delete('page');

        if (selectedValue === 'default' && newParams.get('sort')) {
            newParams.delete('sort');
            router.push(`?${decodeURIComponent(newParams.toString())}`, { scroll: false });
        }
        else {
            newParams.set('sort', selectedValue);
            router.push(`?${decodeURIComponent(newParams.toString())}`, { scroll: false });
        }
    }

    return (
        <div className='flex items-center text-[12px]'>
            <span className='text-[#4A4A4A] pb-[6px]'>Sort by </span>

            <select
                defaultValue={sortByValue}
                onChange={handleChange}
                className='text-[#454545] pl-[0px] pb-[6px] ml-[7px] mr-[5px] border-b focus:outline-none'
            >
                <option value="default">Default</option>
                <option value="price:asc">Price (Low to High)</option>
                <option value="price:desc">Price (High to Low)</option>
            </select>
        </div>
    )
}
