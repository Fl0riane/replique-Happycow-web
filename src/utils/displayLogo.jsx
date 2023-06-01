import veganlogo from "../assets/img/category_vegan.png";
import veggielogo from "../assets/img/category_vegetarian.png";
import vegoptlogo from "../assets/img/category_veg-options.png";
import vegShopLogo from "../assets/img/category_veg-store.png";
import otherLogo from "../assets/img/category_other.png";
import healthStoreLogo from "../assets/img/category_health-store.png";
import bakeryLogo from "../assets/img/category_bakery.png";
import barJuiceLogo from "../assets/img/category_juice-bar.png";
import coffeeLogo from "../assets/img/category_coffee-tea.png";
import spaLogo from "../assets/img/category_spa.png";
import iceCreamLogo from "../assets/img/category_ice-cream.png";
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
  } else if (props === "Health Store") {
    return <img className="logo" src={healthStoreLogo} alt="logo veg store" />;
  } else if (props === "Bakery") {
    return <img className="logo" src={bakeryLogo} alt="logo veg store" />;
  } else if (props === "Juice Bar") {
    return <img className="logo" src={barJuiceLogo} alt="logo veg store" />;
  } else if (props === "Coffee") {
    return <img className="logo" src={coffeeLogo} alt="logo veg store" />;
  } else if (props === "Ice Cream") {
    return <img className="logo" src={iceCreamLogo} alt="logo veg store" />;
  } else if (props === "Spa") {
    return <img className="logo" src={spaLogo} alt="logo veg store" />;
  } else {
    return <img className="logo" src={otherLogo} alt="logo veg store" />;
  }
};

export default displayVeg;
