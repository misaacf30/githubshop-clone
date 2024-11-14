'use client'

import Image from "next/image"
import Link from "next/link"
import { NavBarItem } from "./NavBarItem"
import { NavDialog } from "./NavDialog"
import { useState } from "react"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    // CHEQUEAR PORTFOLIO WEBSITE PARA HACER MENU PARECIDO CON TRANSICION

    return (
        <div className='px-[15px] py-[21px] max-w-[1390px] mx-auto'>
            <div className='relative flex flex-wrap content-center '>
                <div className='min-[838px]:hidden content-center'> {/* Hamburguer icon */}
                    <Link href={''}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 384"
                            width="24"
                            height="24"
                        >
                            <path d="M 0 32 Q 0 18 9 9 L 9 9 L 9 9 Q 18 0 32 0 L 416 0 L 416 0 Q 430 0 439 9 Q 448 18 448 32 Q 448 46 439 55 Q 430 64 416 64 L 32 64 L 32 64 Q 18 64 9 55 Q 0 46 0 32 L 0 32 Z M 0 192 Q 0 178 9 169 L 9 169 L 9 169 Q 18 160 32 160 L 416 160 L 416 160 Q 430 160 439 169 Q 448 178 448 192 Q 448 206 439 215 Q 430 224 416 224 L 32 224 L 32 224 Q 18 224 9 215 Q 0 206 0 192 L 0 192 Z M 448 352 Q 448 366 439 375 L 439 375 L 439 375 Q 430 384 416 384 L 32 384 L 32 384 Q 18 384 9 375 Q 0 366 0 352 Q 0 338 9 329 Q 18 320 32 320 L 416 320 L 416 320 Q 430 320 439 329 Q 448 338 448 352 L 448 352 Z" />
                        </svg>
                    </Link>

                </div>

                <ul className='bg-white absolute left-0 h-screen w-[40vw] z-10 px-[15px] '> {/* Mobile menu */}
                    <li className='leading-[40px]'>
                        <div className='flex justify-between px-[10px] py-[8px]'>
                            <Link href={''}>
                                <span className='text-[16px] text-[#232323] font-semibold'>
                                    Shop all
                                </span>
                            </Link>
                            <span>
                                {'>'}
                            </span>
                        </div>

                        <ul className='text-[16px] text-[#575757] font-semibold leading-normal '>
                            <li className='pl-[35px] py-[10px]'>New all</li>
                            <li className='pl-[35px] py-[10px]'>Apparel</li>
                            <li className='pl-[35px] py-[10px]'>Collectibles</li>
                        </ul>
                    </li>
                    <li className='border-t leading-[40px]'>
                        <div className='flex justify-between px-[10px] py-[8px]'>
                            <Link href={''}>
                                <span className='text-[16px] text-[#232323] font-semibold '>
                                    Collections
                                </span>
                            </Link>
                            <span>
                                {'>'}
                            </span>
                        </div>
                    </li>
                    <li className='border-t leading-[40px]'>
                        <div className='flex justify-between px-[10px] py-[8px]'>
                            <Link href={''}>
                                <span className='text-[16px] text-[#232323] font-semibold '>
                                    About
                                </span>
                            </Link>
                        </div>
                    </li>

                </ul>
                

                <div className='ml-[10px] min-[838px]:ml-0'>    {/* Home icon - Logo */}
                    <Link href={''}>
                        <Image
                            src="https://www.thegithubshop.com/media/logo/stores/36/gh-shop-logo.png"
                            alt=''
                            width='96'
                            height='34'

                        />
                    </Link>

                </div>

                {/* NavBar hidden min-[838px]:block */}
                <nav className={`ml-[25px] content-center hidden min-[838px]:block`}
                //  ${showMenu === true ? 'bg-white ml-0 order-first z-20 h-screen content-start fixed block' : ''} 
                >
                    <ul className={`flex text-[16px] text-[#23282E] font-semibold tracking-[0.5px] `}>
                        <NavBarItem navItem={'Shop all'} subNavItems={['New arrivals', 'Apparel', 'Collectibles', 'Bags']} />
                        <NavBarItem navItem={'Collections'} subNavItems={['SPORTech collection', 'WFH collection']} />
                        <NavBarItem navItem={'About'} subNavItems={[]} />

                    </ul>
                </nav>

                <div className='flex ml-auto items-center '>    {/* Cart icon */}
                    <Link href={''}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m 11,10 0.497683,2 h 6 L 18,10 H 11 M 1,1 h 4 l 2.68,13.39 a 2,2 0 0 0 2,1.61 h 9.72 a 2,2 0 0 0 2,-1.61 L 23,6 H 6 m 15,15 a 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 1,1 0 0 1 1,1 z m -11,0 a 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 1,1 0 0 1 1,1 z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
