import { github } from "@/config/config"

export default function Header() {
    return (
        <>
            <div className="w-full px-3 mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl fixed top-0 left-0 right-0">
                <nav className="navbar">
                    <div className="w-full px-3 mx-auto">
                        <a className="navbar-brand" href="/">Opal Kim</a>
                        <Navbar></Navbar>
                        <a href={github.url} className="github-corner" aria-label="View source on GitHub">
                            <img src="/github.svg" alt="Github Logo" />
                        </a>
                    </div>
                </nav>
            </div>
            {/* 抵消nav的fixed-top带来的副作用 */}
            <div className="pt-14 h-0"></div>
        </>
    )
}

function Navbar() {
    return (
        <div id="nav">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </div>
    )
}