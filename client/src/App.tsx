import { Route, Switch } from "wouter"
import { Suspense, useEffect } from "react"

import Footer from "./components/Footer"
import NavHeader from "./components/NavHeader"
import { lazy } from "react"

const App = (): JSX.Element => {
    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark"
        document.documentElement.classList.toggle("dark", isDark)
    }, [])

    const Home = lazy(() => import("./routes/Home"))
    const About = lazy(() => import("./routes/About"))
    const NotFound = lazy(() => import("./routes/NotFound"))

    return (
        <div className="flex flex-col bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary">
            <NavHeader />

            <main className="flex h-full w-full grow flex-col items-center p-4">
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
    )
}

export default App
