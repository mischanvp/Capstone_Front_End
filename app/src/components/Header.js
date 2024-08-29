import '../style.css';
import Logo from '../pics/Logo.svg';
import BurgerIcon from '../pics/burgericon.svg';
import {Link} from 'react-router-dom'
import React, { useState } from 'react';

function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            <nav className="nav-header">
                <img src={BurgerIcon} alt="Menu" className="burger-icon" onClick={toggleNav} />
                <img src={Logo} alt="Little Lemon Logo" className="pic-logo" />
                <ul className={`nav-list ${isNavOpen ? "open" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/reserve" onClick={toggleNav}>Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
