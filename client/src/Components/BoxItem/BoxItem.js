import "./BoxItem.scss";
import defaultCat from "../../assets/images/leon-card-img.png";
import removeIcon from "../../assets/icons/remove-icon.svg";



const BoxItem = () => {
    return (
        <div className="box-item">
        <div className="box-item__container">
            <div className="box-item__img-container">
                <img src={defaultCat} alt="cat" className="box-item__img"/>
            </div>
            <p className="box-item__name body-copy">Leon</p>
        </div>
          
            <div className="box-item__price-container">
                <p className="box-item__amount body-copy">1</p>
                <p className="box-item__price body-copy">$150</p>
                <img className="box-item__remove-icon" src={removeIcon} alt="remove icon"/>
            </div>
        </div>
    )
}

export default BoxItem;