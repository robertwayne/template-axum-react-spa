import PrefetchLink from "../components/PrefetchLink"

const NotFound = () => {
    return (
        <div>
            <h1 style={{ fontSize: "2rem" }}>Not Found</h1>

            <PrefetchLink to="/" file="Home">
                Return to Home
            </PrefetchLink>
        </div>
    )
}

export default NotFound
