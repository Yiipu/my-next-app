import { github, title, navLinks } from "@/config/config"
import Image from "next/image"
import CollapsTab from "./collapse-tab"
import Nav from "./nav"

export default function Header(
    {
        className,
    }: {
        className?: string,
    }) {
    return (
        <header className={`${className} w-full`}>
            <div className="md:flex md:flex-wrap relative h-fit md:h-12 leading-12">
                <div className="text-center w-full md:w-fit md:mx-2">
                    <Logo />
                </div>
                <div className="md:hidden">
                    <CollapsTab />
                </div>
                <div className="hidden md:block w-16" />
                <nav className="hidden md:flex">
                    <Nav navLinks={navLinks}
                        linkStyle="block h-full mr-5 hover:border-b-4"
                        activeLinkStyle="border-b-4" />
                </nav>
                <div className="absolute right-0 top-0">
                    <GitHub />
                </div>
            </div>
        </header>
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
