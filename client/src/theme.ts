export interface Theme {
    name: string
    background: string
    text: string
    accent: string
    highlight: string
}

export const darkTheme: Theme = {
    name: "dark",
    background: "hsl(0, 0%, 14%)",
    text: "hsl(0, 0%, 92%)",
    accent: "hsl(0, 0%, 29%)",
    highlight: "hsl(32, 91%, 64%)",
}

export const lightTheme: Theme = {
    name: "light",
    background: "hsl(0, 0%, 92%)",
    text: "hsl(0, 0%, 14%)",
    accent: "hsl(0, 0%, 82%)",
    highlight: "hsl(202, 96%, 39%)",
}

export const generateThemeCss = (theme: Theme): object => {
    return Object.entries(theme).reduce(
        (theme, [key, value]) => ({
            ...theme,
            [`--${key}`]: value,
        }),
        {}
    )
}
