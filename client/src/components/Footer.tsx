import "./Footer.module.css"

import ExternalLink from "./ExternalLink"

const Footer = (): JSX.Element => {
    return (
        <footer>
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
