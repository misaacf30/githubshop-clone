'use client'

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    categoryList: any
    sizeList: any
    colorList: any
    page: number
}

export const SideFilterBar = ({ categoryList, sizeList, colorList, page }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSelect = (filterType: string, slug: string) => {
        const newParams = new URLSearchParams(searchParams);

        if (page > 1)
            newParams.delete('page');

        if (!newParams.has(filterType, slug))                   // if (event.target.checked)) -> faster?
            newParams.append(filterType, slug);
        else
            newParams.delete(filterType, slug);

        router.push(`?${decodeURIComponent(newParams.toString())}`, { scroll: false });
    }

    const checkSelected = (filterType: string, slug: string) => {
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

        return "?" + decodeURIComponent(newParams.toString());
    }

    const getSelectedSize = (filterType: string) => {
        const newParams = new URLSearchParams(searchParams);

        if(newParams.getAll(filterType).length > 0)
            return `(${newParams.getAll(filterType).length})`
    }

    return (
        <div className='min-[838px]:pr-[20px] block'>
            <strong className='text-[12px] text-[#4a4a4a] pt-[10px] pb-[20px] pr-[10px] tracking-[0.5px] leading-[18px] block'>
                Shopping options
            </strong>
            <div className="block">
                {(categoryList && categoryList.length > 0) && (
                    <div className='block divide-y-[1.5px]'>
                        <h3 className='text-[12px] py-[8px] tracking-normal leading-[20px]'>
                            Category &nbsp;
                            <span className='text-[#494949] font-semibold'>{getSelectedSize('category')}</span>
                            
                        </h3>
                        <ul className='text-[12px] text-[#494949] py-[10px]'>
                            {categoryList.map((category: any, index: number) => (
                                <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>  {/* flex!!! */}
                                    <input
                                        type="checkbox"
                                        //name="category"
                                        //value={category.slug}
                                        //disabled={checkDisabled(category.slug)}
                                        //onChange={handleSelect}
                                        checked={checkSelected('category', category.slug)}
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
                            Size &nbsp;
                            <span className='text-[#494949] font-semibold'>{getSelectedSize('size')}</span>
                        </h3>
                        <ul className='text-[12px] text-[#494949] py-[10px]'>
                            {sizeList.map((size: any, index: number) => (
                                <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                    <input
                                        type="checkbox"
                                        checked={checkSelected('size', size.slug)}
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
                            Colors &nbsp;
                            <span className='text-[#494949] font-semibold'>{getSelectedSize('color')}</span>
                        </h3>
                        <ul className='text-[12px] text-[#494949] py-[10px]'>
                            {colorList.map((color: any, index: number) => (
                                <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                    <input
                                        type="checkbox"
                                        checked={checkSelected('color', color.slug)}
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
