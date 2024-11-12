'use client'

import Link from 'next/link'

interface Props {
  button: string
}

export const Button = ({ button }: Props) => {
  return (
    <Link
      href={''}
      className='bg-black font-extrabold text-white text-[18px] border rounded-[7.5px]
                inline-block mr-[10px] mb-[10px] py-[10px] px-[17px]'
    >
      {button}
    </Link>
  )
}
