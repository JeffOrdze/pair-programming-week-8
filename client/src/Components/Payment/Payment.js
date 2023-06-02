import "./Payment.scss";

const Payment = () => {
    return (
        <div className="payment">
            <h2 className="checkout-shipping__title">Checkout</h2>
            <form className="payment__form">
                <div className="payment__card-number">
                    <label forhtml="cardNumber">Card number</label>
                    <input name="cardNumber" type="number" id="cardNumber"/>
                </div>
                <div className="payment__expiry-date">
                        <label forhtml="expiryDate">Expiry date</label>
                        <input 
                        name="expiryDate" 
                        type="text" 
                        placeholder="MM / YY" 
                        maxLength='7' id="expiryDate"/>
                    </div>
                    <div className="payment__cvv">
                        <label forhtml="cvv">CVV</label>
                        <input name="cvv" type="password" maxLength="3" id="cvv"/>
                    </div>
                    <button className="payment__button button">Continue</button>
            </form>
        </div>
    )
}

export default Payment;