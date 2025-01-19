import { CartItems } from "../components/CartItems"

export default async function Cart() {
    return (
        <div className='px-[15px] max-w-[1390px] mx-auto'>



            <div className='flex'>
                <h1 className='text-[48px] font-extrabold mb-[40px]'>
                    Cart
                </h1>
                <span>
                    (1 item)
                </span>
            </div>

            <div className="flex">
                <div className="w-2/3 mr-[16px] border rounded-md">
                    <CartItems />
                </div>
                <div className="w-1/3 ml-[16px] border rounded-md">
                    <button>Continue to Checkout</button>
                    <div>
                        <div className="flex">
                            <span>Subtotal:&nbsp;</span>
                            <div> 132321</div>
                        </div>
                        <div className="flex">
                            <span>Taxes:&nbsp;</span>
                            <div>Calcualted at checkout</div>
                        </div>
                    </div>
                    <div className="flex">
                        <span>Estimated total:&nbsp;</span>
                        <div>1321221</div>
                    </div>
                </div>
            </div>
        </div>
    )
}