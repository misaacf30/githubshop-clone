import Link from "next/link"

interface Props {
    text: string
    isHomePage: boolean
    link: string
}

export const TextButton = ( { text, isHomePage, link } : Props ) => {
    return (
        <Link
            href={link}
            className='py-[14px] mb-[10px] inline-block tracking-[0.5px] group'
        >
            <span className={`${isHomePage ? 'text-[24px]' : 'text-[18px]'} font-semibold group-hover:underline underline-offset-1`}>{text}</span>
            
            {isHomePage && <span className='text-[14px] font-normal group-hover:text-[15px]'> &nbsp; {'>'}</span>}
        </Link>
    )
}
