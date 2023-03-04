import ExternalLink from "./ExternalLink"

const Footer = (): JSX.Element => {
    return (
        <footer className="flex w-full flex-col items-center gap-1 p-2">
            <span>
                <ExternalLink to="https://github.com/robertwayne/template-axum-react-spa">
                    GitHub
                </ExternalLink>
            </span>
            <span>&copy; {new Date().getFullYear()} Rob Wagner</span>
        </footer>
    )
}

export default Footer
