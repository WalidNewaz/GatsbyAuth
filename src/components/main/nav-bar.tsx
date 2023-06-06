import * as React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../../services/auth"

import '../../css/style.css'

const Logout: React.FC = () => (
    isLoggedIn() ? (
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          Logout
        </a>
      ) : null
)

const NavBar: React.FC = () => {
    let greetingMessage = ""
    if (isLoggedIn()) {
        greetingMessage = `Hello ${getUser().name}`
    } else {
        greetingMessage = "You are not logged in"
    }

    return (
        <header>
            <span>{greetingMessage}</span>
            <ul className="list-none flex gap-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/heading-context">Heading Context</Link></li>
                <li><Link to="/app/profile">Profile</Link></li>
                <li><Link to="/app/trips/created">Trips Created</Link></li>
                <li><Logout /></li>
            </ul>
        </header>
    )
}

export default NavBar
