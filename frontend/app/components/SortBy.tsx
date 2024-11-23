'use client'

import { useRouter } from "next/navigation";

export const SortBy = ( { selectedValue } : { selectedValue : string | string[] | undefined } ) => {
    const router = useRouter()

    const handleChange = (event : any) => {       
        router.push(event.target.value, {scroll: false})
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
                <option value="?sort=price:asc">Price (Low to High)</option>
                <option value="?sort=price:desc">Price (High to Low)</option>
            </select>
        </div>
    )
}
