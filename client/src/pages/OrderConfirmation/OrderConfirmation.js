import "./OrderConfirmation.scss";
import catDelivered from "../../assets/images/cat-delivered-img.png";


const OrderConfirmation = () => {
    return (
        <div className="order-confirmation">
            <div className="order-confirmation__copy">
                <h2 className="order-confirmation__title page-header">Thank you for your order!</h2>
                <div className="order-confirmation__card">
                    <p className="order-confirmation__paragraph body-copy">
                    We will deliver your cat safely within 24h!
                    Make sure to be present at the delivery.
                    </p>
                </div>
            </div>
            <div className="order-confirmation__img-container">
                <img src={catDelivered} alt="cat standing outside the door" className="order-confirmation__img"/>
            </div>
        </div>
    )
}

export default OrderConfirmation;