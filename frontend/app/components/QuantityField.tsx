'use client'

import { useState } from "react"

interface Props {
    stock: number
}

export const QuantityField = ( { stock } : Props ) => {
    const [value, setValue] = useState(1);

    const handleIncrement = () => {
        if(value < 10 && value < stock)
            setValue(value + 1);
    }

    const handleDecrement = () => {
        if(value !== 1)
            setValue(value - 1);
    }

    return (
        <div className='flex'>
            <div className='mb-[20px]'>
                <div className=' border border-[#cccccc] rounded-[8px] mr-[20px]'>
                    <button
                        onClick={handleDecrement}
                        className='text-[25px] text-[#8A8A8A] font-extrabold px-[15px] py-[7px]'>
                        -
                    </button>
                    <input
                        type="number"
                        id=""
                        value={value}
                        onChange={((e) => setValue(parseInt(e.target.value)))}
                        className='[&::-webkit-inner-spin-button]:appearance-none text-[14px] text-center w-[54px] h-[48px] px-[6px] py-[14px]'
                    />
                    <button
                        onClick={handleIncrement}
                        className='text-[25px] text-[#8A8A8A] font-extrabold px-[15px] py-[7px]'>
                        +
                    </button>
                </div>
            </div>

            <button className='text-[18px] text-[#ffffff] font-extrabold bg-[#23282e] border rounded-[8px] px-[17px] py-[15px] mb-[25px]'>
                <span>Add to cart</span>
            </button>
        </div>
    )
}
