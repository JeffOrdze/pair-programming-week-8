import "./BoxItem.scss";
import defaultCat from "../../assets/images/leon-card-img.png";
import removeIcon from "../../assets/icons/remove-icon.svg";



const BoxItem = () => {
    return (
        <div className="box-item">
            <div className="box-item__img-container">
                <img src={defaultCat} alt="cat"/>
            </div>
            <div className="box-item__price-container">
                <p className="box-item__amount paragraph">1</p>
                <p className="box-item__price paragraph">$150</p>
                <img className="box-item__remove-icon" src={removeIcon} alt="remove icon"/>
            </div>
        </div>
    )
}

export default BoxItem;