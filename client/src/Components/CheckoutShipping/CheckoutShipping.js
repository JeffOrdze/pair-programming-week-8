import "./CheckoutShipping.scss";


const CheckoutShipping = () => {
    return (
        <div className="checkout-shipping">
            <h2 className="checkout-shipping__title">Checkout</h2>
            <form className="checkout-shipping__form">
                <div className="checkout-shipping__name-div">
                    <div className="checkout-shipping__first-name">
                        <label forhtml="firstName">First name</label>
                        <input name="firstName" type="text" id="firstName"/>
                    </div>
                    <div className="checkout-shipping__last-name">
                        <label forhtml="lastName">Last name</label>
                        <input name="lastName" type="text" id="lastName"/>
                    </div>
                </div>
                <div className="checkout-shipping__email-container">
                    <label forhtml="email">E-mail</label>
                    <input name="email" type="text" id="email"/>
                </div>
                <h2 className="checkout-shipping__subtitle subtitle">Shipping info</h2>
                <div className="checkout-shipping__address">
                    <label forhtml="address">Address</label>
                    <input name="address" type="text" id="address"/>
                </div>
                <div className="checkout-shipping__postal-code">
                        <label forhtml="postalCode">Postal code</label>
                        <input name="postalCode" type="text" id="postalCode"/>
                    </div>
                    <div className="checkout-shipping__city">
                        <label forhtml="city">City</label>
                        <input name="city" type="text" id="city"/>
                    </div>
                    <button className="checkout-shipping__button button">Continue</button>
            </form>
        </div>
    )
}

export default CheckoutShipping;