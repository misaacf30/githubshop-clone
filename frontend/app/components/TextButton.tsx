'use client'

import Link from "next/link"

export const TextButton = ( { text } : { text : string} ) => {
    return (
        <Link
            href={''}
            className='text-[24px] font-semibold py-[14px] mb-[10px] inline-block tracking-[0.5px]'
        >
            {text}&nbsp;<span className='text-[14px] font-normal' > {'>'}</span>
        </Link>
    )
}
