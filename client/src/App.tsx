import { Route, Switch } from "wouter"
import { Suspense, useEffect, useMemo, useState } from "react"
import { darkTheme, generateThemeCss, lightTheme } from "./theme"

import Footer from "./components/Footer"
import NavHeader from "./components/NavHeader"
import css from "./App.module.css"
import { lazy } from "react"

const App = (): JSX.Element => {
    const [theme, setTheme] = useState(darkTheme)
    const themeCss = useMemo(() => generateThemeCss(theme), [theme])

    useEffect(() => {
        localStorage.getItem("theme") === "dark"
            ? setTheme(darkTheme)
            : setTheme(lightTheme)
    }, [])

    const Home = lazy(() => import("./routes/Home"))
    const About = lazy(() => import("./routes/About"))
    const NotFound = lazy(() => import("./routes/NotFound"))

    return (
        <div style={themeCss}>
            <div className={css.container}>
                <NavHeader theme={theme} setTheme={setTheme} />

                <main>
                    <Suspense>
                        <Switch>
                            <Route path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                </main>

                <Footer />
            </div>
        </div>
    )
}

export default App
