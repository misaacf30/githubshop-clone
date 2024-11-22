import { pages } from "next/dist/build/templates/app-page"
import Link from "next/link"

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

    return (
        <div className='inline-flex place-items-center p-[10px] mb-[30px]'>
            <Link
                href={prevPageUrl}
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
                            className={`${page === index + 1 && "pointer-events-none border border-black font-semibold"}
                                    mx-[6px] px-[10px] py-[6px] rounded-3xl hover:text-black/70`}
                        >
                            <span>{index + 1}&nbsp;</span>
                        </Link>
                    </li>

                ))}
            </ul>

            <Link
                href={nextPageUrl}
                className={`${isLastPage && "pointer-events-none hidden"}
                        flex items-center justify-center px-2 h-8 text-xl bg-transparent rounded-3xl ml-[6px]
                        hover:bg-gray-900 hover:text-white`}
            >
                {` >`}
            </Link>
        </div>
    )
}
