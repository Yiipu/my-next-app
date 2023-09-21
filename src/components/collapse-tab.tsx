'use client'
import Image from "next/image";
import Nav from "./nav";
import { navLinks } from "@/config/config";
import { useCollapse } from 'react-collapsed'

// 在 <md 屏幕上显示
export default function CollapsTab() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <>
            <button {...getToggleProps()} className="absolute left-0 top-0">
                <Image
                    src='/menuButton.svg'
                    width={48}
                    height={48}
                    alt="nav button"
                    className="w-fit h-12" />
            </button>
            <nav {...getCollapseProps()} className="">
                <Nav navLinks={navLinks} linkStyle="text-center block" activeLinkStyle="" />
            </nav>
        </>
    )
}
