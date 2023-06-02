import "./MyBox.scss";
import BoxItem from "../BoxItem/BoxItem";

const MyBox = (props) => {
     console.log(props)
    return (
        <div className="my-box">
            <h2 className="my-box__title header-small">My Box</h2>
            <BoxItem />
            <div className="my-box__total-div">
                <p className="my-box__total paragraph">Total:</p>
                <p className="my-box__price paragraph">$</p>
            </div>
            <button className="my-box__button">Checkout</button>
        </div>
    )
}

export default MyBox;