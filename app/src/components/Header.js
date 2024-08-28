import '../style.css';
import Logo from '../pics/Logo.svg';

function Header() {
    return (
        <header>
            <nav className="nav-header">
                <img src={Logo} alt="Little Lemon Logo" className="pic-logo" />
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li className="nav-item-hidden"><a href="#About">About</a></li>
                    <li className="nav-item-hidden"><a href="#Menu">Menu</a></li>
                    <li><a href="#Reservations">Reservations</a></li>
                    <li><a href="#Order">Order</a></li>
                    <li className="nav-item-hidden"><a href="#Login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
