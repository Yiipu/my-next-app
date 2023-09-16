import { github, title, navLinks } from "@/config/config"
import Image from "next/image"
import CollapsTab from "./collapse-tab"
import Nav from "./nav"

export default function FixedHeader() {
    return (
        <>
            <header className="fixed top-0 w-full bg-perfume-300 dark:bg-black">
                <div className="flex relative h-12 leading-12">
                    <div className="absolute md:hidden">
                        <CollapsTab />
                    </div>
                    <div className="mx-auto text-center md:mx-2">
                        <Logo />
                    </div>
                    <div className="w-16" />
                    <nav className="hidden md:flex">
                        <Nav navLinks={navLinks}/>
                    </nav>
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

function Logo() {
    return (
        <a className="logo" href="/">{title}</a>
    )
}
