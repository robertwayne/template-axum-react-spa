import { Route, Switch } from "wouter"

import Footer from "./components/Footer"
import NavHeader from "./components/NavHeader"
import { Suspense } from "react"
import { ThemeContextProvider } from "./ThemeContext"
import { lazy } from "react"

const App = (): JSX.Element => {
    const Home = lazy(() => import("./routes/Home"))
    const About = lazy(() => import("./routes/About"))
    const NotFound = lazy(() => import("./routes/NotFound"))

    return (
        <ThemeContextProvider>
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
        </ThemeContextProvider>
    )
}

export default App
