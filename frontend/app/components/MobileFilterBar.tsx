'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { getFilteredCategories } from "../lib/get-filtered-categories"
import { useRouter, useSearchParams } from "next/navigation"
import { getFilteredSizes } from "../lib/get-filtered-sizes"
import { getFilteredColors } from "../lib/get-filtered-colors"

interface Props {
    categoryList: any
    sizeList: any
    colorList: any
}

export const MobileFilterBar = ({ categoryList, sizeList, colorList }: Props) => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(false);
    const [size, setSize] = useState(false);
    const [color, setColor] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();

    let selectedCategories: any;
    let selectedSizes: any ;
    let selectedColors: any;

    useEffect(() => {
        if (open)
            document.body.classList.add('overflow-y-hidden');
        else
            document.body.classList.remove('overflow-y-hidden');

        return () => {
            document.body.classList.remove('overflow-y-hidden');
        }
    }, [open])

    useEffect(() => {
        const newParams = new URLSearchParams(searchParams);
        
        alert(newParams)

    },[])

    const checkSelected = (filterType: string, slug: string) => {
        //
    }

    const handleSelect = (filterType: string, slug: string) => {       
        // async () => {
        //     if(filterType === 'category') {
        //         selectedSizes = await getFilteredSizes({categories: selectedCategories, colors: selectedColors});
        //         selectedColors = await getFilteredColors({categories: selectedCategories, sizes: selectedSizes});
        //     }
        //     else if(filterType === 'size') {
        //         selectedCategories = await getFilteredCategories({sizes: selectedSizes, colors: selectedColors});
        //         selectedColors = await getFilteredColors({categories: selectedCategories, sizes: selectedSizes});
        //     }
        //     else if(filterType === 'color') {
        //         selectedCategories = await getFilteredCategories({sizes: selectedSizes, colors: selectedColors});
        //         selectedSizes = await getFilteredSizes({categories: selectedCategories, colors: selectedColors});
        //     }
        // } 
    }


    return (
        <div>
            <div
                onClick={() => setOpen(true)}
                className='text-[14px] text-[#454545] content-center border border-[#e5e7eb] rounded-[12px] px-[12px] py-[2px] cursor-pointer'
            >
                <span className='text-[16px] font-medium'>
                    &#8801;
                </span>
                <span className=''>
                    &nbsp;&nbsp;Filters
                </span>

            </div>


            <div className={`${!open && 'hidden'} bg-white fixed w-screen h-screen max-w-[837px] top-0 left-0 right-0 z-30`}>
                <div className='flex flex-col h-full'>

                    <div className='flex-none h-auto px-[24px] py-[16px] border-b-[1px] flex justify-between'>
                        <div className='flex flex-row items-center'>
                            <span className='text-[24px]'>
                                &#8801;
                            </span>
                            <strong className='text-[16px] text-[#4a4a4a] tracking-[0.5px] leading-[18px] block'>
                                &nbsp;&nbsp;Filters
                            </strong>

                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className='text-[20px]'
                        >
                            X
                        </button>
                    </div>


                    <div className="grow overflow-y-auto px-[24px] py-[16px]">
                        {(categoryList && categoryList.length > 0) && (
                            <div className='block'>
                                <button
                                    onClick={() => setCategory(!category)}
                                    className='text-[14px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
                                    border-b-[1px]'
                                >
                                    <div>
                                        Category &nbsp;
                                        <span className='text-[#494949] font-semibold'>{ }</span>
                                    </div>

                                    <div className='text-[24px] font-extralight'>
                                        {'>'}
                                    </div>
                                </button>
                                <ul className={`text-[14px] text-[#494949] py-[10px] ${!category && 'hidden'}`}>
                                    {categoryList.map((category: any, index: number) => (
                                        <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                            <input
                                                type="checkbox"
                                                checked={false}
                                                onChange={() => handleSelect( 'category', category.slug)}
                                                className='mr-[5px]'
                                            />
                                            <Link
                                                href={''}
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
                            <div className='block'>
                                <button
                                    onClick={() => setSize(!size)}
                                    className='text-[14px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
                                border-b-[1px]'
                                >
                                    <div>
                                        Size &nbsp;
                                        <span className='text-[#494949] font-semibold'>{ }</span>
                                    </div>

                                    <div className='text-[24px] font-extralight'>
                                        {'>'}
                                    </div>
                                </button>
                                <ul className={`text-[14px] text-[#494949] py-[10px] ${!size && 'hidden'}`}>
                                    {sizeList.map((size: any, index: number) => (
                                        <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                            <input
                                                type="checkbox"
                                                //checked={}
                                                //onChange={}
                                                className='mr-[5px] '
                                            />
                                            <Link
                                                href={''}
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
                            <div className='block'>
                                <button
                                    onClick={() => setColor(!color)}
                                    className='text-[14px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
                                border-b-[1px]'
                                >
                                    <div>
                                        Color &nbsp;
                                        <span className='text-[#494949] font-semibold'>{ }</span>
                                    </div>

                                    <div className='text-[24px] font-extralight'>
                                        {'>'}
                                    </div>
                                </button>
                                <ul className={`text-[14px] text-[#494949] py-[10px] ${!color && 'hidden'}`}>
                                    {colorList.map((color: any, index: number) => (
                                        <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                            <input
                                                type="checkbox"
                                                //checked={}
                                                //onChange={}
                                                className='mr-[5px] '
                                            />
                                            <Link
                                                href={''}
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

                    <div className='bg-gray-white z-40 flex-none h-auto p-[24px] border-t-[1px]'>
                        <button
                            onClick={() => setOpen(false)}
                            className='text-[14px] font-bold text-white bg-[#3a3a3a] w-full h-[40px] text-center items-center rounded-[1000px] px-[24px] flex justify-center whitespace-nowrap'
                        >
                            Show results
                        </button>
                    </div>

                </div>


            </div>


        </div>
    )
}
