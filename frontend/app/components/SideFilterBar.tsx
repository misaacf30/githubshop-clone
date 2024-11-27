'use client'

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
    categoriesList: any
}

export const SideFilterBar = ( { categoriesList } : Props) => {
    const [isChecked, setIsChecked] = useState(false)

    const router = useRouter();
    const searchParams = useSearchParams();

    //newParams.set('sort', selectedValue);
    //router.push(`?${decodeURIComponent(newParams.toString())}`, { scroll: false });
    const newParams = new URLSearchParams(searchParams);

    const handleSelect = (event: any) => {
        //const newParams = new URLSearchParams(searchParams);
        const categorySlug = event.target.value;

        if (newParams.has('category', categorySlug))
            newParams.delete('category', categorySlug);
        else
            newParams.append('category', categorySlug);

        router.push(`?${decodeURIComponent(newParams.toString())}`, {scroll: false});
    }

    const checkSelection  = (categorySlug: string) => {
        if(newParams.has('category', categorySlug))
            return true;
        else
            return false;
    }

    return (
        <div>
            <strong>Shopping options</strong>
            <div>
                {categoriesList && (
                    <div className='text-[12px]'>
                        <h3>Category</h3>
                        <ul className='text-[$494949]'>
                            {categoriesList.map((category: any, index: number) => (
                                <li key={index} className='pl-[10px] pr-[7px] my-[10px]'>
                                    <input 
                                        type="checkbox" 
                                        value={category.slug} 
                                        checked={checkSelection(category.slug)}
                                        onChange={handleSelect}
                                        className='mr-[5px] '
                                    />
                                    <Link
                                        //onClick={}
                                        href={`?category=${category.slug}`}
                                        
                                    >
                                        {category.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}
