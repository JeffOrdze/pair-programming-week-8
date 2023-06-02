import "./MyBox.scss";
import BoxItem from "../BoxItem/BoxItem";

const MyBox = ({state}) => {
    return (
        <div className="my-box">
            <h2 className="my-box__title sub-header">My Box</h2>
            <BoxItem state={state}/>
            <div className="my-box__total-div">
                <p className="my-box__total body-copy">Total:</p>
                <p className="my-box__price body-copy">$</p>
            </div>
            <button className="my-box__button button-large btnLarge">Checkout</button>
        </div>
    )
}

export default MyBox;