import "./Header.scss";
import logo from "../../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import boxIcon from "../../assets/icons/box-icon.svg";
import Badge from "@mui/material/Badge";

const Header = ({state}) => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="logo" className="header__logo" />
        <h3>Rent-A-Kitty</h3>
      </div>
      <nav className="header__navbar">
        <ul className="header__link-container">
          <Link to="/" className="header__link">
            <li className="header__nav-item">Home</li>
          </Link>
          <Link to="/cats" className="header__link">
            <li className="header__nav-item">Cats</li>
          </Link>
          <Link to="/mybox" className="header__link header__link-box">
            <li className="header__nav-item">Your Box</li>
            <Badge badgeContent={state.length !== 0 ? state.data.length : 0} color="warning">
              <img src={boxIcon} alt="box icon" />
            </Badge>
          </Link>
          <Link to="/mybox">
          <button className="header__button button-medium">Checkout</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
