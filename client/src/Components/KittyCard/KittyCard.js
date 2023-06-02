import "./KittyCard.scss";
import defaultCat from "../../assets/images/yenna-card-img.png";
import axios from "axios";
import { useEffect, useState } from "react";

const KittyCard = () => {
    const { cat, setCat } = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8080/cats")
        .then(response => {
        console.log(response.data)
        })
        .catch(error) = () => {
            console.log(error)
        }
    }, [])
    return (
        <div className="kitty-card">
            <img src={defaultCat} alt="cat"/>
            <div className="kitty-card__copy">
                <div className="kitty-card__name">Yenna</div>
                <div className="kitty-card__card-body">
                    <p className="kitty-card__description paragraph">
                    AKA Queen of Meowkness. Will patiently listen to your complaints. If you don’t pay enough attention to her, she may bite onto the corners of your screen. 
                    </p>
                    <div className="kitty-card__bottom-div">
                        <p className="kitty-card__price">Price: $150/day</p>
                        <button className="kitty-card__button button">Add to Box</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KittyCard;