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
        <Link
            to={to}
            onPointerEnter={() => import(`../routes/${file}.tsx`)}
            className="border-b-light-highlight hover:border-b-2 hover:text-light-highlight dark:border-b-dark-highlight dark:hover:text-dark-highlight"
        >
            {children}
        </Link>
    )
}

export default PrefetchLink
