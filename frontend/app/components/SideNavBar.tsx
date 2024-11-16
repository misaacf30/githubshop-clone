'use client'

import { useEffect, useRef, useState } from "react"
import { SideNavBarItem } from "./SideNavBarItem"

// LOCK SCROLL !!!  -> 'overflow-hidden'
// CAMBIAR COLOR DE OTROS ELEMENTOS MENOS DEL SIDE NAV BAR (como sombra o layer)
// document.body.style.marginRight = document.body.offsetWidth - widthBefore + "px";  *to get rid of layout shift when scrollbar shows and hides* 
// next.config.ts -> reactRestrictMode = false ????
// useEffect???? or useReff????)
// ckiclk outside??
// close side navbar when changing screen size

export const SideNavBar = () => {
    const [showNav, setShowNav] = useState(false)
    const [navId, setNavId] = useState('')
    const navbarRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (showNav === true) {
            document.body.classList.add('fixed', 'left-[80vw]');
        }
        else {
            document.body.classList.remove('fixed', 'left-[80vw]');
        }

        return () => {
            document.body.classList.remove('fixed', 'left-[80vw]');
        }
    }, [showNav])

    useEffect(() => {
        function handleClickOutside(event : any) {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setShowNav(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 838) {
            setShowNav(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className='flex'>
            <div className={`min-[838px]:hidden content-center `}> {/* Hamburguer icon */}
                <span className='cursor-pointer'
                    onClick={() => {
                        setShowNav(!showNav);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 384"
                        width="24"
                        height="24"
                    >
                        <path d="M 0 32 Q 0 18 9 9 L 9 9 L 9 9 Q 18 0 32 0 L 416 0 L 416 0 Q 430 0 439 9 Q 448 18 448 32 Q 448 46 439 55 Q 430 64 416 64 L 32 64 L 32 64 Q 18 64 9 55 Q 0 46 0 32 L 0 32 Z M 0 192 Q 0 178 9 169 L 9 169 L 9 169 Q 18 160 32 160 L 416 160 L 416 160 Q 430 160 439 169 Q 448 178 448 192 Q 448 206 439 215 Q 430 224 416 224 L 32 224 L 32 224 Q 18 224 9 215 Q 0 206 0 192 L 0 192 Z M 448 352 Q 448 366 439 375 L 439 375 L 439 375 Q 430 384 416 384 L 32 384 L 32 384 Q 18 384 9 375 Q 0 366 0 352 Q 0 338 9 329 Q 18 320 32 320 L 416 320 L 416 320 Q 430 320 439 329 Q 448 338 448 352 L 448 352 Z" />
                    </svg>
                </span>
            </div>

            {showNav &&
                <div className={`bg-white/50 fixed left-0 top-0 w-[100vw] h-[100vh] ${!showNav && 'hidden'} min-[838px]:hidden z-20 cursor-pointer`}>
                    <nav className={`bg-white h-screen w-[80vw] overflow-visible border-r-2 shadow-xl cursor-default`} ref={navbarRef} >
                        <div className='flex justify-between px-[15px] pt-[24px] pb-[7px]'>
                            <span className='text-[16px] text-[#232323] font-extrabold'>
                                Menu
                            </span>
                        </div>
                        <ul className='divide-y divide-[#f7f7f7] px-[15px] py-[25px]'>
                            <SideNavBarItem navItem='Shop all' subNavItems={['New arrivals', 'Apparel', 'Collectibles', 'Bags', 'Drinkware']} navId={navId} setNavId={setNavId} />
                            <SideNavBarItem navItem='Collections' subNavItems={['SPORTech collection', 'WFH collection', 'Pride collection']} navId={navId} setNavId={setNavId} />
                            <SideNavBarItem navItem='About' subNavItems={[]} navId={navId} setNavId={setNavId} />
                        </ul>
                    </nav>
                </div>
            }

        </div>
    )
}
