import "./NavHeader.module.css"

import { Dispatch, SetStateAction } from "react"
import { Theme, darkTheme, lightTheme } from "../theme"

import { Link } from "wouter"
import PrefetchLink from "./PrefetchLink"
import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"

const NavHeader = ({
    theme,
    setTheme,
}: {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
}): JSX.Element => {
    const toggleTheme = (): void => {
        setTheme(theme.name === "dark" ? lightTheme : darkTheme)
        localStorage.setItem("theme", theme.name === "dark" ? "light" : "dark")
    }

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
        <nav>
            <h1>
                <Link to="/">Template</Link>
            </h1>
            <div>
                <ul>
                    {router.map((route) => {
                        return (
                            <li key={route.to}>
                                <PrefetchLink to={route.to} file={route.name}>
                                    {route.name}
                                </PrefetchLink>
                            </li>
                        )
                    })}

                    <li>
                        <button onClick={toggleTheme}>
                            <img
                                src={theme.name == "dark" ? sun : moon}
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
