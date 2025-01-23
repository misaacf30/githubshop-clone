'use client'

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../lib/store/features/cart/cartSlice"

interface Props {
    sizes: any,
    stock: number,
    documentId: string,
    name: string,
    price: number,
    image: string,
}

export const ProductInteractiveComponents = ({ sizes, stock, documentId, name: name, price: price, image }: Props) => {
    const [size, setSize] = useState(sizes.length > 0 && sizes[0].code);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        if (quantity < 10 && quantity < stock)
            setQuantity(quantity + 1);
    }

    const handleDecrement = () => {
        if (quantity !== 1)
            setQuantity(quantity - 1);
    }

    const handleAddToCart = () => {
        const newCartItem = {
            id: documentId,
            name: name,
            price: price,
            image: image,
            size: size,
            quantity: quantity,
        }
        dispatch(addToCart(newCartItem));
    }

    return (
        <div className='flex flex-col'>
            {sizes.length > 0 && (
                <div className='my-[20px]'>
                    <div className='pl-[2px]'>
                        <div>
                            <h4 className='text-[14px] text-[#cfb0b0]'>Size</h4>
                        </div>
                        <div className='flex flex-wrap mt-[10px]'>
                            {sizes.map((sizeItem: any, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(sizeItem.code)}
                                    className={`text-[12px] font-semibold  flex items-center justify-center  w-[43px] h-[43px] min-w-[43px] ml-[5px] mr-[15px] mb-[5px]
                                    rounded-[50%] outline outline-[0px] outline-[#686868] outline-offset-1 hover:outline-[1px] cursor-pointer       
                                    ${size === sizeItem.code ? 'bg-[#282d33] text-[#f0f0f0] hover:outline-none' : 'bg-[#f0f0f0] text-[#686868]'}`}
                                >
                                    {sizeItem.code}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}


            <div className='flex py-[10px]'>
                <div className='mb-[20px]'>
                    <div className='border border-[#cccccc] rounded-[8px] mr-[20px]'>
                        <button
                            onClick={handleDecrement}
                            className='text-[25px] text-[#8A8A8A] font-extrabold px-[15px] py-[7px]'>
                            -
                        </button>
                        <input
                            type="number"
                            id=""
                            value={quantity}
                            onChange={((e) => setQuantity(parseInt(e.target.value)))}
                            className='[&::-webkit-inner-spin-button]:appearance-none text-[14px] text-center w-[54px] h-[48px] px-[6px] py-[14px]'
                        />
                        <button
                            onClick={handleIncrement}
                            className='text-[25px] text-[#8A8A8A] font-extrabold px-[15px] py-[7px]'>
                            +
                        </button>
                    </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    className='text-[18px] text-[#ffffff] font-extrabold bg-[#23282e] border rounded-[8px] px-[15px] py-[13px] mb-[25px]'
                >
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    )
}
