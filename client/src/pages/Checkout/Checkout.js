import "./Checkout.scss";
import catShipping from "../../assets/images/shipping-cat.png";
import { Outlet } from "react-router-dom";

const Checkout = () => {
    return (
        <section className="checkout-shipping">
            <div className="checkout-shipping__img-container">
                <img src={catShipping} alt="cat in a box" className="checkout-shipping__img"/>
            </div>
            <Outlet/>
        </section>
    )
}

export default Checkout;