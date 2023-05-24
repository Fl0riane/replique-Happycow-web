import { Link } from "react-router-dom";
import displayStars from "../../utils/displaystars";
import "./restaurantCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantCard = (props, index) => {
  // console.log(props);

  return (
    <section className="bloc" key={props.elem.placeId}>
      <div className="imgBloc">
        <button>
          <FontAwesomeIcon icon="fa-regular fa-heart" />
        </button>
        <Link to={`/restaurant/${props.elem.placeId}`} props={props.elem}>
          <img src={props.elem.pictures[0]} alt="restaurant pic" />
        </Link>
      </div>
      <div>
        <h3>{props.elem.name}</h3>
        <div>{displayStars(props.elem.rating)} </div>
        <p>{props.elem.description}</p>
      </div>
    </section>
  );
};

export default RestaurantCard;
