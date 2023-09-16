'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function Nav({
    navLinks,
    linkStyle,
    activeLinkStyle,
}: {
    navLinks: {
        href: string;
        name: string;
    }[],
    linkStyle?: string,
    activeLinkStyle?:string
}) {

    const pathname = usePathname()

    return (
        <>
            {navLinks.map(
                (link) => {

                    const isActive = pathname === link.href

                    return (
                        <Link
                            className={`${isActive && activeLinkStyle} ${linkStyle}`}
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
