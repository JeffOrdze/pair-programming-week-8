import "./Header.scss";
import logo from "../../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import boxIcon from "../../assets/icons/box-icon.svg";
import Badge from '@mui/material/Badge';

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo"/>
                <h3>Rent-A-Kitty</h3>
            </div>
            <nav>
                <ul>
                    <Link to="#">
                        <li>Home</li>
                    </Link>
                    <Link to="#">
                        <li>Cats</li>
                    </Link>
                    <Link to="#">
                        <li>Your Box</li>
                        <Badge variant="dot" color="warning">
                            <img src={boxIcon} alt="box icon"/>
                        </Badge>
                    </Link>
                    <button>Checkout</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;