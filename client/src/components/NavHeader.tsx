import { useEffect, useState } from "react"

import { Link } from "wouter"
import PrefetchLink from "./PrefetchLink"
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"

const NavHeader = (): JSX.Element => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = (): void => {
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", isDark ? "light" : "dark")
        setIsDark(!isDark)
    }

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"))
    }, [])

    const router = [
        {
            to: "/",
            name: "Home",
        },
        {
            to: "/about",
            name: "About",
        },
    ]

    return (
        <nav className="flex w-full items-center justify-between p-4 ">
            <h1 className="text-3xl">
                <Link to="/">Template</Link>
            </h1>
            <div>
                <ul className="flex items-center text-xl">
                    {router.map((route) => {
                        return (
                            <li key={route.to} className="ml-4 flex">
                                <PrefetchLink to={route.to} file={route.name}>
                                    {route.name}
                                </PrefetchLink>
                            </li>
                        )
                    })}

                    <li>
                        <button
                            onClick={toggleTheme}
                            className="ml-4 flex border-none bg-transparent"
                        >
                            <img
                                src={isDark ? sun : moon}
                                alt="sun"
                                width="24"
                                height="24"
                            />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavHeader
