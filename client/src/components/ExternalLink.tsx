/**
 * Wrapper around an <a> tag leading to an external site. Always opens in a new
 * tab.
 */
const ExternalLink = ({
    to,
    children,
}: {
    to: string
    children: string
}): JSX.Element => {
    return (
        <a
            className="font-bold hover:text-light-highlight dark:hover:text-dark-highlight"
            href={to}
            rel="noopener noreferrer"
            target="_blank"
        >
            {children}
        </a>
    )
}

export default ExternalLink
