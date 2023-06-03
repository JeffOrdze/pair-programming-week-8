import "./BoxItem.scss";
import removeIcon from "../../assets/icons/remove-icon.svg";



const BoxItem = ({state}) => {
  const {img, name } = state.data[0];

    return (
        <div className="box-item">
        <div className="box-item__container">
            <div className="box-item__img-container">
                <img src={img} alt="cat" className="box-item__img"/>
            </div>
            <p className="box-item__name body-copy">{name}</p>
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