import React from 'react'
import './navbar.styles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className="navbar-container">
        <div className="container flex justify-between align-center">
            <Link className="logo" to="#">
                Book<span className="text-primary">Worm</span>
            </Link>

            <nav className="nav-links-container">
                <Link className="nav-links" to="#">
                    Home
                </Link>

                <Link className="nav-links" to="#">
                    Books
                </Link>
            </nav>   
        </div>
    </section>
  )
}

export default Navbar