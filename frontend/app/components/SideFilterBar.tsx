'use client'

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
    categoryList: any
    sizeList: any
    colorList: any
    page: number
}

export const SideFilterBar = ({ categoryList, sizeList, colorList, page }: Props) => {
    const [isChecked, setIsChecked] = useState(false)

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSelect = (filterType: string, slug: string) => {
        const newParams = new URLSearchParams(searchParams);

        if (page > 1)
            newParams.delete('page');

        if (newParams.has(filterType, slug))
            newParams.delete(filterType, slug);
        else
            newParams.append(filterType, slug);

        router.push(`?${decodeURIComponent(newParams.toString())}`, { scroll: false });
    }

    const checkSelection = (filterType: string, slug: string) => {
        const newParams = new URLSearchParams(searchParams);
        if (newParams.has(filterType, slug))
            return true;
        else
            return false;
    }

    const handleLink = (filterType: string, slug: string) => {
        const newParams = new URLSearchParams(searchParams);

        if (page > 1)
            newParams.delete('page');

        if (!newParams.has(filterType, slug))
            newParams.append(filterType, slug);
        else
            newParams.delete(filterType, slug);

        if(categoryList.includes('')) {

        }

        return "?" + decodeURIComponent(newParams.toString());
    }

    // FIX: unselect filters when they are hidden after selecting other filters !!!!!!!!!!!! *****************************************

    console.log("COLOR LIST LENGTH ->>>> " + colorList.length + " ****************************")

    // const checkDisabled = (catSlug  : string) => {
    //     const newParams = new URLSearchParams(searchParams);

    //     if(!newParams.has('category')){
    //         return false;
    //     }
    //     else if(newParams.has('category', catSlug)) {
    //         return false;
    //     }
    //     else 
    //         return true;
    // }

    return (
        <div className="min-[838px]:pr-[20px] block">
            <strong className='text-[12px] text-[#4a4a4a] pt-[10px] pb-[20px] pr-[10px] tracking-[0.5px] leading-[18px] block'>
                Shopping options
            </strong>
            <div className="block">
                {(categoryList && categoryList.length > 0) && (
                    <div className='block divide-y-[1.5px]'>
                        <h3 className='text-[12px] py-[8px] tracking-normal leading-[20px]'>
                            Category
                        </h3>
                        <ul className='text-[12px] text-[#494949] py-[10px]'>
                            {categoryList.map((category: any, index: number) => (
                                <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>  {/* flex!!! */}
                                    <input
                                        type="checkbox"
                                        //value={category.slug}
                                        //disabled={checkDisabled(category.slug)}
                                        checked={checkSelection('category', category.slug)}
                                        onChange={() => handleSelect('category', category.slug)}
                                        className='mr-[5px]'
                                    />
                                    <Link
                                        href={handleLink('category', category.slug)}
                                        scroll={false}
                                        className='tracking-[0.5px] leading-[14px]'
                                    >
                                        {category.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {(sizeList && sizeList.length > 0) && (
                    <div className='block divide-y-[1.5px]'>
                        <h3 className='text-[12px] py-[8px] tracking-normal leading-[20px] '>
                            Size
                        </h3>
                        <ul className='text-[12px] text-[#494949] py-[10px]'>
                            {sizeList.map((size: any, index: number) => (
                                <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                    <input
                                        type="checkbox"
                                        //value={size.slug}
                                        checked={checkSelection('size', size.slug)}
                                        onChange={() => handleSelect('size', size.slug)}
                                        className='mr-[5px] '
                                    />
                                    <Link
                                        href={handleLink('size', size.slug)}
                                        scroll={false}
                                        className='tracking-[0.5px] leading-[14px]'
                                    >
                                        {size.code}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {(colorList && colorList.length > 0) && (
                    <div className='block divide-y-[1.5px]'>
                        <h3 className='text-[12px] py-[8px] tracking-normal leading-[20px] '>
                            Colors
                        </h3>
                        <ul className='text-[12px] text-[#494949] py-[10px]'>
                            {colorList.map((color: any, index: number) => (
                                <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                    <input
                                        type="checkbox"
                                        //value={color.slug}
                                        checked={checkSelection('color', color.slug)}
                                        onChange={() => handleSelect('color', color.slug)}
                                        className='mr-[5px] '
                                    />
                                    <Link
                                        href={handleLink('color', color.slug)}
                                        scroll={false}
                                        className='tracking-[0.5px] leading-[14px]'
                                    >
                                        {color.name}
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
