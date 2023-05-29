import veganlogo from "../assets/img/category_vegan.png";
import veggielogo from "../assets/img/category_vegetarian.png";
import vegoptlogo from "../assets/img/category_veg-options.png";
import vegShopLogo from "../assets/img/category_veg-store.png";
import otherLogo from "../assets/img/category_other.png";
const displayVeg = (props) => {
  // console.log(props);
  if (props === "vegan") {
    return <img className="logo" src={veganlogo} alt="logo végan" />;
  } else if (props === "vegetarian") {
    return <img className="logo" src={veggielogo} alt="logo végétarien" />;
  } else if (props === "veg-options") {
    return <img className="logo" src={vegoptlogo} alt="logo vég-options" />;
  } else if (props === "Veg Store") {
    return <img className="logo" src={vegShopLogo} alt="logo veg store" />;
  } else {
    return <img className="logo" src={otherLogo} alt="logo veg store" />;
  }
};

export default displayVeg;
