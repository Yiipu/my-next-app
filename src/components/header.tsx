'use client'
import { github, navItems, title } from "@/config/config"
import { useCollapse } from "react-collapsed";
import Image from "next/image";
import githubLogo from '@/media/images/github.svg'
import menuButtonLogo from '@/media/images/menuButton.svg'
import lightLogo from '@/media/images/light-sun.svg'
import darkLogo from '@/media/images/dark-moon.svg'
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({
    weight: ['400', '700'],
    subsets: ['latin'],
})

// 接口

const currentNavId = 1

export default function Header({
    onDarkModeToggle,
    currentTheme,
}: {
    onDarkModeToggle: React.Dispatch<React.SetStateAction<boolean>>,
    currentTheme: boolean
}) {
    return (
        <>
            <div className="w-full mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl">
                <header className="flex relative bg h-12">
                    <NavTab />
                    <Logo />
                    <Navbar />
                    <GitHub />
                    <ThemeToggle onDarkModeToggle={onDarkModeToggle} currentTheme={currentTheme} />
                </header>
            </div>
            {/* 抵消nav的fixed-top带来的副作用
            <div className="pt-12 h-0"></div> */}
        </>
    )
}

function GitHub() {
    return (
        <a href={github.url} className="absolute right-0 top-0 h-full" aria-label="View source on GitHub">
            <Image
                src={githubLogo}
                alt="Github Logo"
                className="dark:invert w-fit h-12"
            />
        </a>
    )
}

// ISSUE
// ${}不起作用
// fixed 要用反引号 `` 而不是引号 '' 包围
function Logo() {
    return (
        <a className={`${dancingScript.className} ml-5 pt-3 pb-1 text-xl mr-12 hover:text-blue-500`} href="/">{title}</a>
    )
}

// 在 >md 屏幕上显示
function Navbar() {
    return (
        <nav className="hidden md:block pt-2">
            <ul className="flex justify-between items-middle pt-1 pb-1">
                {navItems.map(
                    (item) => {
                        if (item.key == currentNavId) {
                            return (
                                <li className="mr-7">
                                    <a className="text-perfume-" href={item.href}>{item.title}</a>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li className="mr-7">
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


// 在 <md 屏幕上显示
function NavTab() {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div className="block md:hidden">
            <button {...getToggleProps()} className="h-full">
                <Image
                    src={menuButtonLogo}
                    alt="nav button"
                    className="w-fit h-12"
                />
            </button>
            <nav {...getCollapseProps()}>
                <ul className="flex flex-col justify-between items-middle fixed z-20 top-12 bg-slate-600">
                    {navItems.map(
                        (item) => {
                            if (item.key == currentNavId) {
                                return (
                                    <li className="mr-5">
                                        <a className="text-blue-300" href={item.href}>{item.title}</a>
                                    </li>
                                )
                            }
                            else {
                                return (
                                    <li className="mr-5">
                                        <a className="hover:text-blue-300" href={item.href}>{item.title}</a>
                                    </li>
                                )
                            }
                        }
                    )}
                </ul>
            </nav>
        </div>
    )
}

function ThemeToggle({
    onDarkModeToggle,
    currentTheme
}: {
    onDarkModeToggle: React.Dispatch<React.SetStateAction<boolean>>,
    currentTheme: boolean,
}) {
    return (
        <button onClick={e => {
            onDarkModeToggle(!currentTheme);
        }}>{currentTheme ?
            <Image
                src={darkLogo}
                alt="dark theme"
                className="w-fit h-8"
            /> :
            <Image
                src={lightLogo}
                alt="light theme"
                className="w-fit h-8"
            />}</button>
    )
}