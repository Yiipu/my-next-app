import { github, navItems, title } from "@/config/config"
import Image from "next/image";
import { CollapsTab } from "./collapse-tab";

// 接口

export const currentNavId = 1

export default function FixedHeader() {
    return (
        <>
            <header className="fixed top-0 w-full bg-perfume-300 dark:bg-black">
                <div className="flex relative h-12 leading-12">
                    <div className="absolute md:hidden">
                        <CollapsTab />
                    </div>
                    <div className="mx-auto text-center md:ml-2 md:mr-7">
                        <Logo />
                    </div>
                    <div className="hidden md:block">
                        <Navbar />
                    </div>
                    <div className="absolute right-0">
                        <GitHub />
                    </div>
                </div>
            </header>
            {/* 抵消 fixed-top 带来的副作用 */}
            <div className="pt-12 h-0"></div>
        </>

    )
}

function GitHub() {
    return (
        <a href={github.url} aria-label="View source on GitHub">
            <Image
                src='/github.svg'
                width={48}
                height={48}
                alt="Github Logo"
                className="w-fit h-12"
            />
        </a>
    )
}

// ISSUE
// ${}不起作用
// fixed 要用反引号 `` 而不是引号 '' 包围
function Logo() {
    return (
        <a className="logo" href="/">{title}</a>
    )
}

function Navbar() {
    return (
        <nav>
            <ul className="flex">
                {navItems.map(
                    (item) => {
                        if (item.key == currentNavId) {
                            return (
                                <li className="mr-7" key={item.key}>
                                    <a className="text-perfume-" href={item.href}>{item.title}</a>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li className="mr-7" key={item.key}>
                                    <a className="hover:text-blue-300" href={item.href}>{item.title}</a>
                                </li>
                            )
                        }
                    }
                )}
            </ul>
        </nav>
    )
}
