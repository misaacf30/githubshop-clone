'use client'

import Image from "next/image"
import { useState } from "react"

// make form another component to use 'use client' only on the form component and not on whole footer *************

export const Footer = () => {
    const [email, setEmail] = useState('')
    return (
        <footer className='px-[15px] max-w-[1390px] mx-auto'>
            <div className='flex flex-wrap  pt-[10px] pb-[40px] w-full text-[#212121] '>
                <div className='w-full min-[838px]:w-[19%] px-[15px]'>
                    <Image
                        src="https://www.thegithubshop.com/media/logo/stores/36/gh-shop-logo.png"
                        alt=''
                        width='100'
                        height='35'
                    />
                </div>
                <div className='w-1/2 min-[838px]:w-[19%] px-[15px] mb-[20px]'>
                    <h4 className='text-[17px] font-extrabold pt-[16px] pb-[17px] my-[10px] leading-[18.7px] tracking-[-0.16px]'>
                        Shop
                    </h4>
                    <ul className='flex flex-col min-[838px]:pr-[50px] text-[14px] leading-[28px] tracking-[0.5px]'>
                        <li>Shop all</li>
                        <li>Apparel</li>
                        <li>Bags & travel</li>
                        <li>Collectibles</li>
                        <li>Drinkware</li>
                        <li>Stickers</li>
                    </ul>
                </div>
                <div className='w-1/2 min-[838px]:w-[19%] px-[15px]'>
                    <h4 className='text-[17px] font-extrabold pt-[16px] pb-[17px] my-[10px] leading-[18.7px] tracking-[-0.16px]'>
                        Customer Service
                    </h4>
                    <ul className='min-[838px]:flex flex-col min-[838px]:pr-[50px] text-[14px] leading-[28px] tracking-[0.5px]'>
                        <li>Track my order</li>
                        <li>Contact us</li>
                        <li>Shopping info</li>
                        <li>Privacy policy</li>
                        <li>Terms & conditions</li>
                    </ul>
                </div>
                <div className='min-[838px]:w-[43%] px-[15px]'>
                    <h4 className='text-[17px] font-extrabold pt-[16px] pb-[17px] my-[10px] leading-[18.7px] tracking-[-0.16px]'>
                        Let's stay in touch
                    </h4>
                    <div className='text-[14px] leading-[28px] tracking-[0.5px]'>
                        <p className='mb-[10px]'>Sign up to get notified about new collections and sales.</p>
                        <form className='flex flex-col' >
                            <label>
                                <input type='email' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border px-[9px] mt-[4px] mb-[14px]' />
                            </label>

                            <label className='text-[#656D76] mb-[12px] '>
                                <input type="checkbox" className='mr-[5px]' />
                                Yes please, I’d like GitHub and affiliates to use my information for personalized communications, targeted advertising and campaign effectiveness. See the GitHub Privacy Statement for more details.
                            </label>
                            
                            <label>
                                <input type="submit" value="Sign me up" className='bg-[#23282E] text-white text-[18px] font-extrabold px-[17px] py-[14px] mr-[10px] mb-[10px] rounded-[7.5px] cursor-pointer' />
                            </label>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    )
}
