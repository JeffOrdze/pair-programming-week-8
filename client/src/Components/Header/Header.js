import "./Header.scss";
import logo from "../../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import boxIcon from "../../assets/icons/box-icon.svg";
import Badge from '@mui/material/Badge';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
                <img src={logo} alt="logo" className="header__logo"/>
                <h3>Rent-A-Kitty</h3>
            </div>
            <nav className="header__navbar">
                <ul className="header__link-container">
                    <Link to="#" className="header__link">
                        <li className="header__nav-item">Home</li>
                    </Link>
                    <Link to="#" className="header__link">
                        <li className="header__nav-item">Cats</li>
                    </Link>
                    <Link to="#" className="header__link header__link-box">
                        <li className="header__nav-item">Your Box</li>
                        <Badge variant="dot" color="warning">
                            <img src={boxIcon} alt="box icon"/>
                        </Badge>
                    </Link>
                    <button className="header__button button-small">Checkout</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;