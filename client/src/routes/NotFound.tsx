import PrefetchLink from "../components/PrefetchLink"

const NotFound = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <h1 className="mb-6 text-4xl font-bold">Page Not Found</h1>

            <PrefetchLink to="/" file="Home">
                Return to Home
            </PrefetchLink>
        </div>
    )
}

export default NotFound
