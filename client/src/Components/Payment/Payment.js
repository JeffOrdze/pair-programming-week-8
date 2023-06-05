import "./Payment.scss";
import { Link } from "react-router-dom";

const Payment = () => {
    return (
        <div className="payment">
            <h2 className="payment__title sub-header">Checkout</h2>
            <h2 className="payment__subtitle">Payment info</h2>
            <form className="payment__form">
                <div className="payment__card-number">
                    <label forhtml="cardNumber">Card number</label>
                    <input name="cardNumber" type="number" id="cardNumber" className="form-field"/>
                </div>
                <div className="payment__date-cvv">
                    <div className="payment__expiry-date">
                        <label forhtml="expiryDate">Expiry date</label>
                        <input 
                        name="expiryDate" 
                        type="text" 
                        placeholder="MM / YY" 
                        maxLength='7' id="expiryDate"
                        className="form-field"/>
                    </div>
                    <div className="payment__cvv">
                        <label forhtml="cvv">CVV</label>
                        <input 
                            name="cvv" 
                            type="password" 
                            maxLength="3" 
                            id="cvv" 
                            className="form-field"/>
                    </div>
                </div>
                <Link to="/confirmation" className="payment__button-link">
                    <button className="payment__button button-large btnLarge">Continue</button>
                </Link> 
            </form>
        </div>
    )
}

export default Payment;