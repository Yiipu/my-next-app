'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function Nav({
    navLinks,
}: {
    navLinks: {
        href: string;
        name: string;
    }[],
}) {

    const pathname = usePathname()

    return (
        <>
            {navLinks.map(
                (link) => {

                    const isActive = pathname === link.href

                    return (
                        <Link
                            className={`${isActive ? 'border-b-4' : ''} block h-full mr-5 hover:border-b-4`}
                            href={link.href}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    )
                }
            )}
        </>
    )
}
