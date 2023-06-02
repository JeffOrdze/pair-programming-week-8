import "./KittyCard.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const KittyCard = () => {
  const [cats, setCats] = useState(null);

  useEffect(() => {
    const getAKitty = async () => {
      try {
        const responseKitty = await axios.get("http://localhost:8080/cats");
        const kitties = responseKitty.data;
        setCats(kitties);
      } catch (error) {
        console.log(error);
      }
    };
    getAKitty();
  }, []);

  if (!cats) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {cats.map((cat, index) => {
        const colors = ["#C16DF4", "#FA9C46", "#54BC5E", "#46A3FA"];
        const backgroundColors = colors[index];
        const cardStyle = { backgroundColor: backgroundColors };

        return (
          <div className="kitty-card" key={cat.id}>
            <img src={cat.img} alt="cat" className="kitty-card__img" />
            <div className="kitty-card__copy">
              <div className="kitty-card__name" style={cardStyle}>
                {cat.name}
              </div>
              <div className="kitty-card__card-body">
                <p className="kitty-card__description paragraph">
                  {cat.description}
                </p>
                <div className="kitty-card__bottom-div">
                  <p className="kitty-card__price">Price: ${cat.price}/day</p>
                  <button className="kitty-card__button button" style={cardStyle}>
                    Add to Box
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KittyCard;
