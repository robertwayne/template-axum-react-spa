import { useContext, useEffect, useState } from "react"

import { Link } from "wouter"
import PrefetchLink from "./PrefetchLink"
import { ThemeContext } from "../ThemeContext"
import closeButton from "../../assets/close.svg"
import hamburgerMenu from "../../assets/menu.svg"
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"

const NavHeader = (): JSX.Element => {
    const ctx = useContext(ThemeContext)
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

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

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        const isDark = theme === "dark" ? true : false
        ctx.setIsDark(isDark)

        if (isDark) {
            document.documentElement.classList.add("dark")
            // We have to manually set a background color on our root element,
            // as it is defined before our app is initiated.
            document.documentElement.classList.add("bg-dark-primary")
        } else {
            document.documentElement.classList.remove("dark")
            // Likewise, we have to manually toggle the background colors here.
            document.documentElement.classList.remove("bg-dark-primary")
            document.documentElement.classList.add("bg-light-primary")
        }
    }, [ctx.isDark])

    /**
     * Swap between light and dark theme, saving the choice to local storage.
     */
    const toggleTheme = (): void => {
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", ctx.isDark ? "light" : "dark")
        ctx.setIsDark(!ctx.isDark)
    }

    /**
     * Opens or closes the hamburger menu.
     */
    const toggleHamburgerMenu = (): void => {
        const element = document.getElementById("hamburger-button")
        if (element) element.classList.toggle("hidden")

        const menu = document.getElementById("hamburger-menu")
        if (menu) menu.classList.toggle("hidden")

        setHamburgerIsOpen(!hamburgerIsOpen)
    }

    const HamburgerMenu = (): JSX.Element => {
        return (
            <div
                id="hamburger-menu"
                className={hamburgerIsOpen ? "" : "hidden"}
            >
                <div className="absolute top-0 right-0 z-10 flex h-full w-full flex-col justify-center bg-light-primary bg-opacity-60 p-2 text-4xl font-bold backdrop-blur-xl dark:bg-dark-primary dark:bg-opacity-60">
                    <div className="flex items-center self-end">
                        <button
                            onClick={toggleTheme}
                            className="ml-4 flex h-[48px] w-[48px] self-end border-none bg-transparent"
                        >
                            <img
                                src={ctx.isDark ? sun : moon}
                                alt="change theme icon"
                                width="36"
                                height="36"
                                className="flex self-center"
                            />
                        </button>

                        <button
                            onClick={toggleHamburgerMenu}
                            className="ml-4 flex self-end border-none bg-transparent"
                        >
                            <img
                                src={closeButton}
                                alt="close menu button"
                                width="48"
                                height="48"
                                className={ctx.isDark ? "invert" : ""}
                            />
                        </button>
                    </div>

                    <ul className="flex grow flex-col justify-center gap-8">
                        {router.map((route) => {
                            return (
                                <li
                                    key={route.to}
                                    className="ml-4 flex h-fit w-fit"
                                >
                                    <PrefetchLink
                                        to={route.to}
                                        file={route.name}
                                        onClick={toggleHamburgerMenu}
                                    >
                                        {route.name}
                                    </PrefetchLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    const StandardMenu = (): JSX.Element => {
        return (
            <ul className="hidden h-fit text-xl font-bold lg:flex">
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
                        className="ml-4 flex border-none"
                    >
                        <img
                            src={ctx.isDark ? sun : moon}
                            alt="change theme icon"
                            width="24"
                            height="24"
                        />
                    </button>
                </li>
            </ul>
        )
    }

    return (
        <nav className="flex w-full items-center justify-between p-4 ">
            <h1 className="text-3xl font-bold">
                <Link to="/">Template</Link>
            </h1>

            <div id="hamburger-button" className="lg:hidden">
                <button onClick={toggleHamburgerMenu}>
                    <img
                        src={hamburgerMenu}
                        width="48"
                        height="48"
                        alt="open menu button"
                        className={ctx.isDark ? "invert" : "invert-0"}
                    />
                </button>
            </div>

            <HamburgerMenu />
            <StandardMenu />
        </nav>
    )
}

export default NavHeader
