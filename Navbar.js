import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        S.M Travel <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/service" className="nav-links" onClick={closeMobileMenu}>
                                Service
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                                Sign-Up
                            </Link>
                        </li>
                    </ul>
                    {button && <button buttonStyle='btn--outline'>Sign-Up</button>}
                </div>
            </nav>
        </div>
    )
}
export default Navbar
