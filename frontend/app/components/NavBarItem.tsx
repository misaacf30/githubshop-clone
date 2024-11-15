'use client'

import Link from "next/link"
import { useState } from "react";

interface Props {
    navItem: string,
    subNavItems: string[],
}

export const NavBarItem = ({ navItem, subNavItems }: Props) => {
    const [showSubNav, setShowSubNav] = useState(false);
    return (
        <li className='relative pl-[20px] px-[8px] '
            onMouseEnter={() => setShowSubNav(true)}
            onMouseLeave={() => setShowSubNav(false)}
        >
            <div className=''>
                <Link href={''}>
                    {navItem}
                </Link>
            </div>
            <div className='absolute left-0 z-10'>
                <ul className={`bg-white border rounded-[8px] pt-[10px] pb-[20px] mt-[8px] 
                                    w-auto min-w-[230px] ${(showSubNav === false || subNavItems.length === 0) && 'hidden'} `}>
                    {
                        subNavItems.map((item, index) =>
                            <li key={index} className='block'>
                                <Link href={''} className='px-[20px] py-[8px] inline-block'>
                                    <span className='text-[16px] text-[#57606A] pb-[5px]'>{item}</span>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </li>
    )
}
