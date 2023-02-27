import { Link } from "wouter"
import { ReactNode } from "react"

/**
 * Wrapper that naively prefetches a route when the user hovers over the link.
 */
const PrefetchLink = ({
    to,
    file,
    children,
}: {
    to: string
    file: string
    children: ReactNode
}) => {
    return (
        <Link to={to} onPointerEnter={() => import(`../routes/${file}.tsx`)}>
            {children}
        </Link>
    )
}

export default PrefetchLink
