import Image from "next/image"

export const Footer = () => {
    return (
        <footer className='px-[15px] max-w-[1390px] mx-auto'>
            <div className='flex flex-col min-[838px]:flex-row pt-[10px] pb-[40px] [&>*]:px-[15px] w-full'>
                <div className='w-[19%]'>
                    <Image
                        src="https://www.thegithubshop.com/media/logo/stores/36/gh-shop-logo.png"
                        alt=''
                        width='100'
                        height='35'
                        className=''
                    />
                </div>
                <div className='w-[19%]'>
                    <div>
                        Shop
                    </div>
                    <ul className='flex flex-col pr-[50px]'>
                        <li>Shop all</li>
                        <li>Apparel</li>
                        <li>Bags & travel</li>
                        <li>Collectibles</li>
                        <li>Drinkware</li>
                        <li>Stickers</li>
                    </ul>
                </div>
                <div className='w-[19%]'>
                    <div>
                        Customer Service
                    </div>
                    <ul className='flex flex-col pr-[50px]'>
                        <li>Track my order</li>
                        <li>Contact us</li>
                        <li>Shopping info</li>
                        <li>Privacy policy</li>
                        <li>Terms & conditions</li>
                    </ul>
                </div>
                <div className='w-[43%]'>
                    <div>
                        Let's stay in touch
                    </div>
                    <div>
                        <p>Sign up to get notified about new collections and sales.</p>
                        <form className='flex flex-col'>

                            <label>
                                Email:
                                <input type="email" value={'asd@sadsa'} />
                            </label>

                            <label>
                                <input type="checkbox" />
                                Yes please, I’d like GitHub and affiliates to use my information for personalized communications, targeted advertising and campaign effectiveness. See the GitHub Privacy Statement for more details.
                            </label>
                        </form>
                    </div>

                </div>
            </div>
        </footer>
    )
}
