import React from 'react'
import Logo from '../pics/Logo.svg'
import '../style.css'

function Header() {
    return (
    <img src={Logo} alt="Little Lemon Logo" className="pic-logo" />
    )
}

export default Header