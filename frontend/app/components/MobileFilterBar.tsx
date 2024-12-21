'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { getFilteredCategories } from "../lib/get-filtered-categories"
import { getFilteredSizes } from "../lib/get-filtered-sizes"
import { getFilteredColors } from "../lib/get-filtered-colors"

interface Props {
    categoryList: any
    sizeList: any
    colorList: any
}

let defaultSelectedCategories: string[] = []
let defaultSelectedSizes: string[] = []
let defaultSelectedColors: string[] = []

export const MobileFilterBar = ({ categoryList, sizeList, colorList }: Props) => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(true);
    const [size, setSize] = useState(true);
    const [color, setColor] = useState(true);

    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        const newParams = new URLSearchParams(searchParams);

        newParams.forEach((value, key) => {
            if (key === 'category' && !defaultSelectedCategories.includes(value))
                defaultSelectedCategories.push(value);
            else if (key === 'size' && !defaultSelectedSizes.includes(value))
                defaultSelectedSizes.push(value);
            else if (key === 'color' && !defaultSelectedColors.includes(value))
                defaultSelectedColors.push(value);
        })
    }, [open])      // fix this ^       [open]

    const [selectedCategories, setSelectedCategories] = useState<string[]>(defaultSelectedCategories);
    const [selectedSizes, setSelectedSizes] = useState<string[]>(defaultSelectedSizes);
    const [selectedColors, setSelectedColors] = useState<string[]>(defaultSelectedColors);

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
        const handleResize = () => {
            if (window.innerWidth > 838) {
                closeFilterBar();
            }
            else {
                // do something here
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const checkSelected = (filterType: string, value: string) => {
        const newParams = new URLSearchParams(searchParams);

        if (filterType === 'category') {
            if (selectedCategories.includes(value))
                return true;
            else
                return false;
        }
        else if (filterType === 'size') {
            if (selectedSizes.includes(value))
                return true;
            else
                return false;
        }
        else if (filterType === 'color' || newParams.has(filterType, value)) {
            if (selectedColors.includes(value))
                return true;
            else
                return false;
        }
    }

    const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked === true) {
            if (event.target.name === 'category' && !selectedCategories.includes(event.target.value)) {
                setSelectedCategories([...selectedCategories, event.target.value]);                
            }
            else if (event.target.name === 'size' && !selectedSizes.includes(event.target.value)) {
                setSelectedSizes([...selectedSizes, event.target.value]);
            }
            else if (event.target.name === 'color' && !selectedColors.includes(event.target.value)) {
                setSelectedColors([...selectedColors, event.target.value]);
            }
        }
        else {
            if (event.target.name === 'category') {
                setSelectedCategories(selectedCategories.filter(category => category !== event.target.value));
            }
            else if (event.target.name === 'size') {
                setSelectedSizes(selectedSizes.filter(size => size !== event.target.value));
            }
            else if (event.target.name === 'color') {
                setSelectedColors(selectedColors.filter(color => color !== event.target.value));
            }
        }
    }

    const showResults = () => {
        const newParams = new URLSearchParams();

        selectedCategories.map((category: string) => {
            newParams.append('category', category)
        })
        selectedSizes.map((size: string) => {
            newParams.append('size', size)
        })
        selectedColors.map((color: string) => {
            newParams.append('color', color)
        })

        return `${pathname}?${decodeURIComponent(newParams.toString())}`
    }

    const closeFilterBar = () => {
        setOpen(false);
        setSelectedCategories(defaultSelectedCategories);
        setSelectedSizes(defaultSelectedSizes);
        setSelectedColors(defaultSelectedColors);
    }

    return (
        <div>
            <div className='flex content-center'>
                <div
                    onClick={() => setOpen(true)}
                    className='text-[14px] text-[#454545] content-center border border-[#e5e7eb] rounded-[12px] px-[12px] py-[2px] cursor-pointer'
                >
                    <span className='text-[16px] font-medium'>
                        &#8801;
                    </span>&nbsp;&nbsp;
                    <span className=''>
                        Filters
                    </span>&nbsp;&nbsp;
                    <span className='text-[12px] font-medium'>
                        ({searchParams.size})
                    </span>

                </div>

                <div className='px-[16px] my-[2px]'>
                    <Link
                        href={'?'}
                        onClick={() => {
                            setSelectedCategories([]);
                            setSelectedSizes([]);
                            setSelectedColors([]);
                        }}
                        className='text-[12px] text-[#656565] underline'
                    >
                        Clear all
                    </Link>
                </div>
            </div>

            {/* FIlter Bar */}
            <div className={`${!open && 'hidden'} bg-white fixed w-screen h-screen max-w-[837px] top-0 left-0 right-0 z-30`}>
                <div className='flex flex-col h-full'>

                    {/* Title: Filters */}
                    <div className='flex-none h-auto px-[24px] py-[16px] border-b-[1px] flex justify-between'>
                        <div className='flex flex-row items-center'>
                            <span className='text-[24px] '>
                                &#8801;
                            </span>
                            <h2 className='text-[16px]  font-bold tracking-[0.5px] leading-[18px] block'>
                                &nbsp;&nbsp;Filters
                            </h2>

                        </div>

                        <button
                            onClick={closeFilterBar}
                            className='text-[20px]'
                        >
                            X
                        </button>
                    </div>

                    {/* Filter types */}
                    <div className="grow overflow-y-auto px-[24px] py-[16px]">
                        {/* Selected filters */}
                        {(selectedCategories.length > 0 || selectedSizes.length > 0 || selectedColors.length > 0) && (
                            <div className='block  tracking-normal leading-[20px]'>
                                <h3 className='text-[14px] font-bold py-[16px] border-b-[1px]'>
                                    Selected filters
                                </h3>
                                <ul className='flex flex-wrap items-center text-[14px] py-[10px]'>
                                    {selectedCategories.map((item, index) => (
                                        <li key={`${size}${index}`} className='border rounded-[4px] mr-[10px] mb-[10px]'>
                                            <button
                                                onClick={() => setSelectedCategories(selectedCategories.filter(category => category !== item))}
                                                className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                                            >
                                                {item}&nbsp;&nbsp;
                                                <span className='text-[#4a4a4a] font-medium'>X</span>
                                            </button>
                                        </li>
                                    ))}
                                    {selectedSizes.map((item, index) => (
                                        <li key={`${size}${index}`} className='border rounded-[4px] mr-[10px] mb-[10px]'>
                                            <button
                                                onClick={() => setSelectedSizes(selectedSizes.filter(size => size !== item))}
                                                className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                                            >
                                                {item.toUpperCase()}&nbsp;&nbsp;
                                                <span className='text-[#4a4a4a] font-medium'>X</span>
                                            </button>
                                        </li>
                                    ))}
                                    {selectedColors.map((item, index) => (
                                        <li key={`${size}${index}`} className='border rounded-[4px] mr-[10px] mb-[10px]'>
                                            <button
                                                onClick={() => setSelectedColors(selectedColors.filter(color => color !== item))}
                                                className='text-[12px] text-[#757575] px-[8px] py-[4px]'
                                            >
                                                {item}&nbsp;&nbsp;
                                                <span className='text-[#4a4a4a] font-medium'>X</span>
                                            </button>
                                        </li>
                                    ))}
                                    <li className=' mr-[10px] mb-[10px]'>
                                        <button
                                            onClick={() => {
                                                setSelectedCategories([]);
                                                setSelectedSizes([]);
                                                setSelectedColors([]);
                                            }}
                                            className='text-[12px] text-[#4a4a4a] decoration-[#4a4a4a] underline py-[4px]'
                                        >
                                            Clear all
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Categories */}
                        {(categoryList && categoryList.length > 0) && (
                            <div className='block'>
                                <button
                                    onClick={() => setCategory(!category)}
                                    className='text-[14px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
                                    border-b-[1px]'
                                >
                                    <div className='flex'>
                                        <h3 className="font-bold">Category &nbsp;</h3>
                                        {selectedCategories.length > 0 && <span className='text-[#494949] font-semibold'>({selectedCategories.length})</span>}
                                    </div>

                                    <div className='text-[24px] font-extralight'>
                                        {'>'}
                                    </div>
                                </button>
                                <ul className={`text-[14px] text-[#494949] py-[10px] ${!category && 'hidden'}`}>
                                    {categoryList.map((category: any, index: number) => (
                                        <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                            <label className='cursor-pointer'>
                                                <input
                                                    type="checkbox"
                                                    name="category"
                                                    value={category.slug}
                                                    checked={checkSelected('category', category.slug)}
                                                    onChange={onChange}
                                                    className='cursor-pointer mr-[5px]'
                                                />
                                                <span className='tracking-[0.5px] leading-[14px]'>{category.title}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Sizes */}
                        {(sizeList && sizeList.length > 0) && (
                            <div className='block'>
                                <button
                                    onClick={() => setSize(!size)}
                                    className='text-[14px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
                                border-b-[1px]'
                                >
                                    <div className='flex'>
                                        <h3 className='font-bold'>Size &nbsp;</h3>
                                        {selectedSizes.length > 0 && <span className='text-[#494949] font-semibold'>({selectedSizes.length})</span>}
                                    </div>

                                    <div className='text-[24px] font-extralight'>
                                        {'>'}
                                    </div>
                                </button>
                                <ul className={`text-[14px] text-[#494949] py-[10px] ${!size && 'hidden'}`}>
                                    {sizeList.map((size: any, index: number) => (
                                        <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start'>
                                            <label className='cursor-pointer'>
                                                <input
                                                    type="checkbox"
                                                    name="size"
                                                    value={size.slug}
                                                    checked={checkSelected('size', size.slug)}
                                                    onChange={onChange}
                                                    className='cursor-pointer mr-[5px] '
                                                />
                                                <span className='tracking-[0.5px] leading-[14px]'>{size.code}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Colors */}
                        {(colorList && colorList.length > 0) && (
                            <div className='block'>
                                <button
                                    onClick={() => setColor(!color)}
                                    className='text-[14px] py-[16px] tracking-normal leading-[20px] w-full flex justify-between
                                border-b-[1px]'
                                >
                                    <div className='flex'>
                                        <h3 className='font-bold'>Color &nbsp;</h3>
                                        {selectedColors.length > 0 && <span className='text-[#494949] font-semibold'>({selectedColors.length})</span>}
                                    </div>

                                    <div className='text-[24px] font-extralight'>
                                        {'>'}
                                    </div>
                                </button>
                                <ul className={`text-[14px] text-[#494949] py-[10px] ${!color && 'hidden'}`}>
                                    {colorList.map((color: any, index: number) => (
                                        <li key={index} className='flex pl-[10px] pr-[7px] py-[4px] my-[8px] items-start '>
                                            <label className='cursor-pointer'>
                                                <input
                                                    type="checkbox"
                                                    name="color"
                                                    value={color.slug}
                                                    checked={checkSelected('color', color.slug)}
                                                    onChange={onChange}
                                                    className='cursor-pointer mr-[5px] '
                                                />
                                                <span className='tracking-[0.5px] leading-[14px]'>{color.name}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Button: Show resuts */}
                    <div className='bg-gray-white z-40 flex-none h-auto p-[24px] border-t-[1px]'>
                        <Link
                            onClick={() => setOpen(false)}
                            href={showResults()}
                            className='text-[14px] font-bold text-white bg-[#3a3a3a] w-full h-[40px] text-center items-center rounded-[1000px] px-[24px] flex justify-center whitespace-nowrap'
                        >
                            Show results
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
