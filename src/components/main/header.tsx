import * as React from "react"
import { Link } from "gatsby"

const Header: React.FC = () => {
    return (
        <header>
            <ul className="list-none flex gap-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/heading-context">Heading Context</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </header>
    )
}

export default Header
