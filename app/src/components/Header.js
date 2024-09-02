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
                    <li><Link to="/" onClick={toggleNav}>Home</Link></li>
                    <li><Link to="/" onClick={toggleNav}>About</Link></li>
                    <li><Link to="/" onClick={toggleNav}>Menu</Link></li>
                    <li><Link to="/booking" onClick={toggleNav}>Reserve</Link></li>
                    <li><Link to="/" onClick={toggleNav}>Order Online</Link></li>
                    <li><Link to="/" onClick={toggleNav}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
