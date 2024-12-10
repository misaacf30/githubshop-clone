'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

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

    const handlePageNumberLink = (index: number) => {
        const newParams = new URLSearchParams(searchParams);
        if (index > 1)
            newParams.set('page', index.toString());
        else
            newParams.delete('page');

        return "?" + decodeURIComponent(newParams.toString());
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
                {!isFirstPage && (
                    <Link
                        href={handlePageNumberLink(prevPage)}
                        className={'flex items-center justify-center px-2 h-8 text-xl bg-transparent rounded-3xl hover:bg-gray-900 hover:text-white'}
                    >
                        {'< '}
                    </Link>
                )}


                {totalPages > 1 && (
                    <ol className='flex flex-row text-[12px] mx-[6px]'>
                        {Array.from({ length: (totalPages) }, (_, index) => (
                            <li key={index}>
                                <Link
                                    href={handlePageNumberLink(index + 1)}
                                    className={`${(index + 1 === page) && 'border border-black font-semibold'} mx-[4px] px-[12px] py-[8px] rounded-[30px] hover:text-black/70`}
                                >
                                    {index + 1}
                                </Link>
                            </li>
                        ))}
                    </ol>
                )}

                {!isLastPage && (
                    <Link
                        href={handlePageNumberLink(nextPage)}
                        className={'flex items-center justify-center px-2 h-8 text-xl bg-transparent rounded-3xl hover:bg-gray-900 hover:text-white'}
                    >
                        {' >'}
                    </Link>
                )}
            </div>

            <div className='max-[837px]:hidden flex text-[12px] text-[#4A4A4A] place-items-center'>
                <span className=''>Show  </span>
                <div className='mx-[8px]'>
                    <select
                        defaultValue={showPerPageValue}
                        onChange={handleSelectChange}
                        className=' pb-[2px]'
                    >
                        <option value='6'>6</option>
                        <option value='12'>12</option>
                        <option value='all'>All</option>
                    </select>
                </div>
                <span className=''> per page </span>
            </div>
        </div>
    )
}
