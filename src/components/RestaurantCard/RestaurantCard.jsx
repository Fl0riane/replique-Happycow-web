import { Link } from "react-router-dom";
import displayStars from "../../utils/displaystars";
import "./restaurantCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import displayLogo from "../../utils/displayLogo";
import Cookies from "js-cookie";
const RestaurantCard = (props) => {
  const item = props.elem;
  const addFavorite = props.addFavorite;
  return (
    <section className="bloc" key={props.elem.paceId}>
      <div className="imgBloc ">
        <button
          onClick={() => {
            addFavorite(item);
          }}
        >
          <FontAwesomeIcon icon="fa-regular fa-heart" />
        </button>

        <Link to={`/restaurant/${props.elem.placeId}`}>
          {props.elem.pictures ? (
            <img src={props.elem.pictures[0]} alt="restaurant pic" />
          ) : (
            <div>{displayLogo(props.elem.type)}</div>
          )}
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
