'use client'

import { useRouter, usePathname, useSearchParams } from "next/navigation";



export const SortBy = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const handleChange = (event : any) => {
        const selectedValue = event.target.value;
        router.push(selectedValue)
    }

    return (
        <div className='text-[12px] flex'>
            SortBy
            
            <select >
                <option value="">Default</option>
                <option value="">Price (Low to High)</option>
                <option value="">Price (High to Low)</option>
            </select>
        </div>
    )
}
