'use client'

import type { RootState } from "../lib/store/store"
import { useDispatch, useSelector } from "react-redux"
import { updateQuantity, removeFromCart, clearCart } from "../lib/store/features/cart/cartSlice"
import Image from "next/image"
import Link from "next/link"

export const CartItems = () => {
  const cart = useSelector((state: RootState) => state.cartReducer.items)
  const dispatch = useDispatch()

  const handleIncrement = (item: any) => {
    if (item.quantity >= 1 && item.quantity < 10)
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
  }

  const handleDecrement = (item: any) => {
    if (item.quantity > 1)
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
    else if (item.quantity === 1)
      dispatch(removeFromCart({ id: item.id, size: item.size }))
  }

  return (
    <ul className="flex flex-col w-full divide-y-[0.5px]">
      {cart.map((item: any, index: number) =>
        <li key={index} className="flex flex-col break-words w-full px-[16px] min-[868px]:px-[24px] py-[16px]">
          <div className="flex w-full">
            <div className="w-1/5">
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

            <div className="w-60 block">
              <Link href={''}>
                {item.name}
              </Link>
              <div>
                Size: {item.size}
              </div>
              <div>
                Price: ${item.price.toFixed(2)}/ea
              </div>
            </div>

            <div className="w-1/5 ml-auto">
              <div className="text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="mr-[28px]">
              <button
                onClick={() => dispatch(removeFromCart({ id: item.id, size: item.size }))}
                className="underline"
              >
                Remove
              </button>
            </div>
            <div>
              <button
                onClick={() => handleIncrement(item)}
                className='text-[18px] text-[#8A8A8A] font-extrabold px-[8px] py-[7px]'>
                -
              </button>
              <input
                type="number"
                id=""
                value={item.quantity}
                onChange={() => console.log()}
                className='[&::-webkit-inner-spin-button]:appearance-none text-[14px] text-center w-[48px] h-[48px] px-[6px] py-[14px]'
              />
              <button
                onClick={() => handleDecrement(item)}
                className='text-[18x] text-[#8A8A8A] font-extrabold px-[8px] py-[7px]'>
                +
              </button>
            </div>
          </div>

        </li>
      )}
    </ul>
  )
}
