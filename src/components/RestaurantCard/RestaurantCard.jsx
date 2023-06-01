import { Link } from "react-router-dom";
import displayStars from "../../utils/displaystars";
import "./restaurantCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import displayLogo from "../../utils/displayLogo";

const RestaurantCard = (props, { addFavorite }) => {
  // console.log(props);

  return (
    <section className="bloc">
      <div className="imgBloc">
        <button
          onClick={() => {
            addFavorite(props.elem);
          }}
        >
          <FontAwesomeIcon icon="fa-regular fa-heart" />
        </button>

        <Link to={`/restaurant/${props.elem.placeId}`}>
          <img src={props.elem.pictures[0]} alt="restaurant pic" />
        </Link>
      </div>
      <div>
        <span className="title">
          <div>{displayLogo(props.elem.type)}</div>

          <h4>{props.elem.name}</h4>
        </span>

        <div key={props.elem.rating}>{displayStars(props.elem.rating)} </div>
        <p>{props.elem.description}</p>
      </div>
    </section>
  );
};

export default RestaurantCard;
