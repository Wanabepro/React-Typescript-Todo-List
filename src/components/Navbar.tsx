import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple paddingX1">
                <Link to="/" className="brand-logo">React + TS</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Todo list</Link></li>
                    <li><Link to="/about">Information</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar