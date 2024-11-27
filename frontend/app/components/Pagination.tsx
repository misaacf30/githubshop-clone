'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { PaginationPageNumberLink } from './PaginationPageNumberLink';

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
                    <PaginationPageNumberLink page={page} item={'<'} index={prevPage} searchParams={searchParams} />
                )}


                {totalPages > 1 && (
                    <ol className='flex flex-row text-[12px] mx-[6px]'>
                        {Array.from({ length: (totalPages) }, (_, index) => (
                            <li key={index}>
                                <PaginationPageNumberLink page={page} item={index + 1} index={index + 1} searchParams={searchParams} />
                            </li>
                        ))}
                    </ol>
                )}

                {!isLastPage && (
                    <PaginationPageNumberLink page={page} item={'>'} index={nextPage} searchParams={searchParams} />
                )}
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
