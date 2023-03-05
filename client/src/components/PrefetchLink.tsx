import { Link } from "wouter"
import { ReactNode } from "react"

/**
 * Wrapper that naively prefetches a route when the user hovers over the link.
 */
const PrefetchLink = ({
    to,
    file,
    onClick: handleClick,
    children,
}: {
    to: string
    file: string
    onClick?: () => void
    children: ReactNode
}): JSX.Element => {
    return (
        <Link
            to={to}
            onPointerEnter={() => import(`../routes/${file}.tsx`)}
            onClick={handleClick}
            className="border-b-2 border-b-light-highlight hover:text-light-highlight dark:border-b-dark-highlight  dark:hover:text-dark-highlight"
        >
            {children}
        </Link>
    )
}

export default PrefetchLink
