//'use client'

import Link from "next/link"
//import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export const Pagination = ({ page, pageSize, pageCount, total }: Props) => {
    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const prevPageUrl = (isFirstPage || page === 2) ? '?' : `?page=${prevPage}`;
    const nextPageUrl = isLastPage ? '#' : `?page=${nextPage}`;

    const pagesNum = total / pageSize;

    // const router = useRouter();
    // const searchParams = useSearchParams();

    // const handleSelectChange = (event : any) => {
    //     // router.push(event.target.value)
    //     const newParams = new URLSearchParams(searchParams);
    //     newParams.set('pageSize', event.target.value); 
    //     router.push(`?${newParams.toString()}`);
    // }

    return (
        <div className='flex justify-center p-[10px] mb-[30px]'>
            <div className='inline-flex place-items-center'>
                <Link
                    href={prevPageUrl}
                    scroll={false}
                    className={`${isFirstPage && "pointer-events-none hidden"}
                        flex items-center justify-center px-2 h-8 text-xl bg-transparent rounded-3xl mr-[6px]
                        hover:bg-gray-900 hover:text-white`}
                >
                    {`< `}
                </Link>

                <ul className='flex flex-row text-[12px]'>
                    {Array.from({ length: (pagesNum) }, (_, index) => (
                        <li key={index} className=''>
                            <Link
                                href={`${index + 1 === 1 ? '?' : `?page=${index + 1}`}`}
                                scroll={false}
                                className={`${(page === index + 1) && "pointer-events-none border border-black font-semibold"}
                                    mx-[5px] px-[10px] py-[8px] rounded-[30px] hover:text-black/70`}
                            >
                                <span>{index + 1}&nbsp;</span>
                            </Link>
                        </li>

                    ))}
                </ul>

                <Link
                    href={nextPageUrl}
                    scroll={false}
                    className={`${isLastPage && "pointer-events-none hidden"}
                        flex items-center justify-center px-2 h-8 text-xl bg-transparent rounded-3xl ml-[6px]
                        hover:bg-gray-900 hover:text-white`}
                >
                    {` >`}
                </Link>
            </div>

            {/* <div className='flex text-[12px] text-[#4A4A4A] place-items-center'>
                <span className=''>Show  </span>
                <div className='mx-[8px]'>
                    <select onChange={handleSelectChange} className=' pb-[2px]'>
                        <option value='6'>6</option>
                        <option value='9'>9</option>
                        <option value='12'>12</option>
                        <option value={total}>All</option>
                    </select>
                </div>
                <span className=''> per page </span>
            </div> */}
        </div>
    )
}
