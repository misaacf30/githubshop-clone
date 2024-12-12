'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NoSearchResults = () => {
    const pathname = usePathname();

    return (
        <div className='flex flex-col text-[#4a4a4a] text-center px-[16px] mt-[72px] mb-[36px]'>
            <h2 className='text-[24px] font-semibold mb-[16px]'>
                We can't find products matching the selection.
            </h2>
            <p className='text-[14px] text-[#5a5a5a] mb-[56px]'>
                Let's clear your filters and start over.
            </p>

            <div>
                <Link
                    href={pathname}
                    className='text-[16px] text-white font-semibold bg-[#3a3a3a] rounded-[12px] px-[16px] py-[8px]'
                >
                    Clear filters
                </Link>
            </div>


            <Link
                href='/'
                className='text-[14px] font-light underline mt-[32px]'
            >
                Return to home
            </Link>

        </div>
    )
}
