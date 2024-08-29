import '../style.css';
import Logo from '../pics/Logo.svg';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav className="nav-header">
                <img src={Logo} alt="Little Lemon Logo" className="pic-logo" />
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/" className="nav-item-hidden" >About</Link></li>
                    <li><Link to="/" className="nav-item-hidden" >Menu</Link></li>
                    <li><Link to="/reserve">Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/" className="nav-item-hidden" >Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
