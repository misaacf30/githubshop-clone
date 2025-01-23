'use client'

import type { RootState } from "../lib/store/store"
import { useDispatch, useSelector } from "react-redux"
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from "../lib/store/features/cart/cartSlice"
import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"



export const CartItems = () => {
  const cartReducer = useSelector((state: RootState) => state.cartReducer);
  const cart = cartReducer.items;
  const cartSize = cartReducer.size;
  const dispatch = useDispatch()

  const handleIncrement = (item: any) => {
    if (item.quantity >= 1 && item.quantity < 10)
      dispatch(incrementQuantity({ id: item.id, size: item.size }))
  }

  const handleDecrement = (item: any) => {
    //if (item.quantity > 1)
    dispatch(decrementQuantity({ id: item.id, size: item.size }))
    //else if (item.quantity === 1)
    //  dispatch(removeFromCart({ id: item.id, size: item.size}))
  }

  const remove = (item: any) => {
    dispatch(removeFromCart({ id: item.id, size: item.size }))
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="flex flex-col w-full">
        <div className="w-full font-medium px-[16px] min-[868px]:px-[24px] py-[8px]">
          {cartSize} items
        </div>
        <ul className="w-full flex flex-col divide-y-[0.5px] divide-dashed">
          {cart.map((item: any, index: number) =>
            <li key={index} className="flex flex-col w-full px-[16px] min-[868px]:px-[24px] py-[16px]">
              <div className="flex w-full">
                <div className="w-1/6 px-[8px]">
                  <Link href={''}>
                    <Image
                      src={item.image}
                      alt={''}
                      width={180}
                      height={180}
                      objectFit="contain"
                      objectPosition="center"
                      className="w-full"
                    />
                  </Link>
                </div>

                <div className="w-4/6">
                  <Link
                    href={''}
                    className="text-[16px] text-[#272727] my-[8px] block "
                  >
                    {item.name}
                  </Link>
                  {/* {item.size && ( */}
                  <div className="text-[14px] text-[#888888]  py-[2px]">
                    Size: {item.size}
                  </div>
                  {/* )} */}
                  <div className="text-[14px] text-[#888888] py-[2px]">
                    Price: ${item.price.toFixed(2)}/ea
                  </div>
                </div>

                <div className="w-1/6 ml-auto">
                  <div className="text-[16px] text-right text-[#373737] font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="mr-[28px]">
                  <button
                    onClick={() => remove(item)}
                    className="underline text-[14px] text-[#8A8A8A]"
                  >
                    Remove
                  </button>
                </div>
                <div className="border rounded-lg flex items-center justify-center p-[4px]">
                  <button
                    onClick={() => handleDecrement(item)}
                    className='text-[18px] text-[#8A8A8A] font-extrabold px-[4px]'>
                    -
                  </button>
                  <span className="text-[14px] box-border flex mx-[28px] items-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrement(item)}
                    className='text-[18x] text-[#8A8A8A] font-extrabold px-[4px]'>
                    +
                  </button>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  )
}
