import React from 'react'
import Logo from '../pics/Logo.svg'
import '../style.css'

function Header() {
    return (
    <img src={Logo} alt="Little Lemon Logo" style={{ height: '50px' }} />
    )
}

export default Header