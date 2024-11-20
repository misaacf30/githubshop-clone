import Link from 'next/link'
import Image from 'next/image'

interface Props {
    image: string
    title: string
    link: string
}

export const ImageButton = ({ image, title, link }: Props) => {
    return (
        <Link
            href={link}
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
