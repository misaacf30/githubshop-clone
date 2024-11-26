'use client'

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
    categories: any
}

export const SideFilterBar = ({ categories }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();


    return (
        <div>
            <strong>Shopping options</strong>
            <div>
                {
                    categories && (
                        <div>
                            <h3>Category</h3>
                            <ul>
                                {
                                    categories.map((category: any, index: number) => (
                                        <li key={index}>
                                            <input type="checkbox"></input>
                                            <Link href={`?category=${category.slug}`}>{category.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
