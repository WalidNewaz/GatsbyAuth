import * as React from "react"
import { Link } from "gatsby"

import '../../css/style.css'

const NavBar: React.FC = () => {
    return (
        <header>
            <ul className="list-none flex gap-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/heading-context">Heading Context</Link></li>
                <li><Link to="/app/profile">Profile</Link></li>
                <li><Link to="/app/trips/created">Trips Created</Link></li>
            </ul>
        </header>
    )
}

export default NavBar
