import "./ExternalLink.module.css"
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
        <a href={to} rel="noopener noreferrer" target="_blank">
            {children}
        </a>
    )
}

export default ExternalLink
