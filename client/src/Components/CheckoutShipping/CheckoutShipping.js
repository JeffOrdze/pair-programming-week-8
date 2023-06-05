import "./CheckoutShipping.scss";
import catShipping from "../../assets/images/shipping-cat.png";
import { Link } from "react-router-dom";


const CheckoutShipping = () => {
    return (
        <section className="checkout-shipping">
            <div className="checkout-shipping__img-container">
                <img src={catShipping} alt="cat in a box" className="checkout-shipping__img"/>
            </div>
            <div className="checkout-shipping__form-container">
                <h2 className="checkout-shipping__title sub-header">Checkout</h2>
                <h2 className="checkout-shipping__subtitle">Shipping info</h2>
                <form className="checkout-shipping__form">
                    <div className="checkout-shipping__name-div">
                        <div className="checkout-shipping__first-name">
                            <label forhtml="firstName">First name</label>
                            <input name="firstName" type="text" id="firstName" className="checkout-shipping__input-field"/>
                        </div>
                        <div className="checkout-shipping__last-name">
                            <label forhtml="lastName">Last name</label>
                            <input name="lastName" type="text" id="lastName" className="checkout-shipping__input-field"/>
                        </div>
                    </div>
                    <div className="checkout-shipping__email-container">
                        <label forhtml="email">E-mail</label>
                        <input name="email" type="text" id="email" className="checkout-shipping__input-field"/>
                    </div>
                    
                    <div className="checkout-shipping__address">
                        <label forhtml="address">Address</label>
                        <input name="address" type="text" id="address" className="checkout-shipping__input-field"/>
                    </div>
                    <div className="checkout-shipping__postal-city-container">
                    <div className="checkout-shipping__postal-code">
                            <label forhtml="postalCode">Postal code</label>
                            <input name="postalCode" type="text" id="postalCode" className="checkout-shipping__input-field"/>
                        </div>
                        <div className="checkout-shipping__city">
                            <label forhtml="city">City</label>
                            <input name="city" type="text" id="city" className="checkout-shipping__input-field"/>
                        </div>
                    </div>
                    <Link to="/shipping/payment" className="checkout-shipping__button-link">
                        <button className="checkout-shipping__button button-large btnLarge">Continue</button>
                    </Link>
                </form>
            </div>
        </section>
        
    )
}

export default CheckoutShipping;