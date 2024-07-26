// /components/NextBreadcrumb.jsx
'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const BreadCrumb = ({
    homeElement = 'Home',
    separator = <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>,
    capitalizeLinks = false
}) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <nav className="flex sm:ml-[10px] lg:ml-[100px]  w-[350px] mt-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        {homeElement}
                    </Link>
                </li>
                {pathNames.length > 0 && separator}
                {
                    pathNames.map((link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        let itemClasses = paths === href ? `inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white` : `inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400`
                        let itemLink = capitalizeLinks ? link.charAt(0).toUpperCase() + link.slice(1) : link
                        return (
                            <React.Fragment key={index}>
                                <li className={itemClasses}>
                                    <Link href={href} className="ms-1 text-sm font-medium capitalize text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                        {itemLink}
                                    </Link>
                                </li>
                                {pathNames.length !== index + 1 && separator}
                            </React.Fragment>
                        )
                    })
                }
            </ol>
        </nav>
    )
}

export default BreadCrumb
