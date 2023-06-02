import "./Checkout.scss";
import catInABox from "../../assets/images/cat-in-a-box-checkout.png";
import MyBox from "../../Components/MyBox/MyBox";
import CheckoutShipping from "../../Components/CheckoutShipping/CheckoutShipping";
import Payment from "../../Components/Payment/Payment";

const Checkout = () => {
    return (
        <div className="checkout">
            <img src={catInABox} alt="cat in a box" className="checkout__cat-img"/>
            <div className="checkout__wrapper">
                <MyBox/>
            </div>
        </div>
    )
}

export default Checkout;