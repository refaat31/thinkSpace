import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
          <Link to="/"><i className="fas fa-code"></i>thinkSpace</Link>
      </h1>
        <ul>
          <li><Link to="!#">Discover new People!</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    )
}

export default NavBar
