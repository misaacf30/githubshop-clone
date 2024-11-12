'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Props {
    image: string
    title: string
}

export const ImageButton = ({ image, title }: Props) => {
    return (
        <Link
            href={''}
        >
            <Image
                src={image}
                alt={title}
                unoptimized
                fill
                objectFit='cover'
                className='rounded-[8px]'
            />
        </Link>
    )
}
