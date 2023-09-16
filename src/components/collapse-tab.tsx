'use client'
import Image from "next/image";
import { useState } from "react";

// 在 <md 屏幕上显示
export function CollapsTab() {

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div >
            <button className="h-full" onClick={() => {
                setCollapsed(!collapsed)
            }}>
                <Image
                    src='/menuButton.svg'
                    width={48}
                    height={48}
                    alt="nav button"
                    className="w-fit h-12 dark:invert" />
            </button>
            {!collapsed && <nav>
                nav items....
            </nav>}
        </div>
    );
}
