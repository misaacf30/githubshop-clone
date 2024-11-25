'use client'

import { useRouter, useSearchParams } from "next/navigation";

export const SortBy = ( { selectedValue } : { selectedValue : string | string[] | undefined } ) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (event : any) => {       
        const newParams = new URLSearchParams(searchParams);
        let page = null

        if(newParams.get('page'))   // if page > 1
            newParams.delete('page');

        newParams.set('sort', event.target.value);
        router.push(`?${decodeURIComponent(newParams.toString())}`, {scroll: false});
    }

    return (
        <div className='flex text-[12px]'>
            <span className='text-[#4A4A4A]'>Sort by </span>

            <select 
                defaultValue={selectedValue && `?sort=${selectedValue}`} 
                onChange={handleChange}
                className='text-[#454545] pl-[0px] pb-[6px] ml-[7px] mr-[5px] border-b focus:outline-none '
            >
                <option value="?">Default</option>
                <option value="price:asc">Price (Low to High)</option>
                <option value="price:desc">Price (High to Low)</option>
            </select>
        </div>
    )
}
