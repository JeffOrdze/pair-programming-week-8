import "./MyBoxPage.scss";
import catInABox from "../../assets/images/cat-in-a-box-checkout.png";
import MyBox from "../../Components/MyBox/MyBox";


const MyBoxPage = ({state}) => {
    return (
        <div className="checkout">
            <img src={catInABox} alt="cat in a box" className="checkout__cat-img"/>
            <div className="checkout__wrapper">
                <MyBox state={state}/>
            </div>
        </div>
    )
}

export default MyBoxPage;