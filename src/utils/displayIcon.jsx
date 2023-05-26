import veganMarker from "../assets/img/vegan_marker.png";
import vegeMarker from "../assets/img/vegetarian_marker.png";
import vegeOptMarker from "../assets/img/veg_options_marker.png";
import vegShopMarker from "../assets/img/veg_shop_marker.png";

const displayIcon = (props) => {
  console.log(props);
  if (props === "vegan") {
    return <img className="logo" src={veganMarker} alt="végan marker" />;
  }
  if (props === "vegetarian") {
    return <img className="logo" src={vegeMarker} alt="végétarien marker" />;
  }

  if (props === "veg-options") {
    return (
      <img className="logo" src={vegeOptMarker} alt=" vég-options marker" />
    );
  }
  if (props === "Veg Store") {
    return <img className="logo" src={vegShopMarker} alt="veg shop marker" />;
  }
};

export default displayIcon;
