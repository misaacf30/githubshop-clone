import Link from 'next/link'

interface Props {
  text: string
  link: string
}

export const Button = ({ text, link }: Props) => {
  return (
    <Link
      href={link}
      className='bg-black font-extrabold text-white text-[18px] border rounded-[7.5px]
                inline-block mr-[10px] mb-[10px] py-[10px] px-[17px]'
    >
      {text}
    </Link>
  )
}
