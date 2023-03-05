import { ReactNode, createContext, useState } from "react"

export const ThemeContext = createContext({
    isDark: document.documentElement.classList.contains("dark") ? true : false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setIsDark: (_: boolean) => {},
})

export const ThemeContextProvider = (props: { children: ReactNode }) => {
    const setIsDark = (isDark: boolean) => {
        setState({ ...state, isDark })
    }

    const initState = {
        isDark: document.documentElement.classList.contains("dark")
            ? true
            : false,
        setIsDark,
    }

    const [state, setState] = useState(initState)

    return (
        <ThemeContext.Provider value={state}>
            {props.children}
        </ThemeContext.Provider>
    )
}
