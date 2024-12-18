'use client'

import Link from "next/link"
import { useState } from "react"

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

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className='text-[14px] text-[#454545] border border-[#e5e7eb] rounded-[8px] px-[8px] py-[2px] cursor-pointer'
            >
                Filters
            </button>

            <div className={`bg-white fixed w-screen h-screen top-0 left-0 bottom-0 z-20 overflow-auto
                px-[24px] ${!open && 'hidden'}`}
            >
                <strong className='text-[12px] text-[#4a4a4a] pt-[10px] pb-[20px] pr-[10px] tracking-[0.5px] leading-[18px] block'>
                    Shopping options
                </strong>

                <div className="block">
                    {(categoryList && categoryList.length > 0) && (
                        <div className='block'>
                            <button
                                onClick={() => setCategory(!category)}
                                className='text-[16px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
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
                                            //checked={}
                                            //onChange={}
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
                                className='text-[16px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
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
                                className='text-[16px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
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

                <div>
                    <button
                        className='fixed bottom-0 z-30'
                    >
                        Show Results
                    </button>
                </div>
            </div>

        </div>
    )
}
