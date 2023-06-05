import "./MyBox.scss";
import BoxItem from "../BoxItem/BoxItem";
import { Link } from 'react-router-dom'

const MyBox = ({state}) => {
    
    return (
        <div className="my-box">
            <h2 className="my-box__title sub-header">My Box</h2>
           {state.data !== undefined ? <BoxItem state={state}/> : null}
            <div className="my-box__total-div">
                <p className="my-box__total body-copy">Total:</p>
                {
                    state.data?
                    (<p className="my-box__price body-copy">${state.data[0].price}</p>)
                    :
                    (<p className="my-box__price body-copy">$0</p>)
                }
            </div>
           <Link to="/shipping" className="my-box__button-link"> 
           <button className="my-box__button button-large btnLarge">Checkout</button>
           </Link> 
        </div>
    
    )
}

export default MyBox;