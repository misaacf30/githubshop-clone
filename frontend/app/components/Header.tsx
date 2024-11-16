import Image from "next/image"
import Link from "next/link"
import { NavBarItem } from "./NavBarItem"
import { SideNavBar } from "./SideNavBar"

export const Header = () => {
    return (
        <div className='px-[15px] py-[21px] max-w-[1390px] mx-auto'>
            <div className='flex flex-wrap content-center'> {/* relative */}
    
                <SideNavBar/>

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
