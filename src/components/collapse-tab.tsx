'use client'
import Image from "next/image";
import { useState } from "react";
import Nav from "./nav";
import { navLinks } from "@/config/config";

// 在 <md 屏幕上显示
export default function CollapsTab() {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <>
            <button className="h-full" onClick={() => {
                setCollapsed(!collapsed)
            }}>
                <Image
                    src='/menuButton.svg'
                    width={48}
                    height={48}
                    alt="nav button"
                    className="w-fit h-12" />
            </button>
            {!collapsed && <nav className="block backdrop-blur-sm">
                <Nav navLinks={navLinks} linkStyle="" activeLinkStyle="" />
            </nav>}
        </>
    );
}
