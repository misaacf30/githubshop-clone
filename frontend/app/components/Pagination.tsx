'use client'

import { useRouter, useSearchParams } from 'next/navigation';

interface Props {
    page: number
    pageSize: number
    pageCount: number
    total: number
    showPerPageValue: string | string[] | undefined
}

export const Pagination = ({ page, pageSize, pageCount, total, showPerPageValue }: Props) => {
    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const totalPages = Math.ceil(total / pageSize);

    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageNumClick = (page: number) => {
        const newParams = new URLSearchParams(searchParams);
        if (page > 1)
            newParams.set('page', page.toString());
        else
            newParams.delete('page');

        router.push(`?${decodeURIComponent(newParams.toString())}`);
    }

    const handleSelectChange = (event: any) => {
        const newParams = new URLSearchParams(searchParams);
        const selectedValue = event.target.value;
        if (page > 1)
            newParams.delete('page');
        newParams.set('pageSize', selectedValue);

        router.push(`?${decodeURIComponent(newParams.toString())}`);
    }

    return (
        <div className='flex justify-between p-[10px] mb-[30px]'>
            <div className='inline-flex place-items-center'>
                <button
                    onClick={() => handlePageNumClick(prevPage)}
                    className={`${isFirstPage && "pointer-events-none hidden"}
                        flex items-center justify-center px-2 h-8 text-xl bg-transparent rounded-3xl mr-[6px]
                        hover:bg-gray-900 hover:text-white`}
                >
                    {`< `}
                </button>

                {
                    totalPages > 1 && (
                        <ul className='flex flex-row text-[12px]'>
                            {Array.from({ length: (totalPages) }, (_, index) => (
                                <li key={index} className=''>
                                    <button
                                        onClick={() => handlePageNumClick(index + 1)}
                                        className={`${(page === index + 1) && "pointer-events-none border border-black font-semibold"}
                                    mx-[5px] px-[10px] py-[8px] rounded-[30px] hover:text-black/70`}
                                    >
                                        <span>{index + 1}&nbsp;</span>
                                    </button>
                                </li>

                            ))}
                        </ul>
                    )
                }

                <button
                    onClick={() => handlePageNumClick(nextPage)}
                    className={`${isLastPage && "pointer-events-none hidden"}
                        flex items-center justify-center px-2 h-8 text-xl bg-transparent rounded-3xl ml-[6px]
                        hover:bg-gray-900 hover:text-white`}
                >
                    {` >`}
                </button>
            </div>


            <div className='flex text-[12px] text-[#4A4A4A] place-items-center'>
                <span className=''>Show  </span>
                <div className='mx-[8px]'>
                    <select
                        defaultValue={showPerPageValue}
                        onChange={handleSelectChange}
                        className=' pb-[2px]'
                    >
                        <option value='9'>9</option>
                        <option value='12'>12</option>
                        <option value='all'>All</option>
                    </select>
                </div>
                <span className=''> per page </span>
            </div>
        </div>
    )
}
