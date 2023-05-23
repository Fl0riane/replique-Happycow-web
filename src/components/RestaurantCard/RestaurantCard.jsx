import displayStars from "../../utils/displaystars";

const RestaurantCard = (props) => {
  // console.log(elem);
  return (
    <div>
      <div>
        <img src={props.elem.pictures[0]} alt="" />
      </div>
      <div>
        <p>{props.elem.name}</p>
        <div>{displayStars(props.elem.rating)}</div>
        <p>{props.elem.description}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
