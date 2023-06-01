import "./display.css";
import veganlogo from "../../assets/img/category_vegan.png";
import veggielogo from "../../assets/img/category_vegetarian.png";
import vegoptlogo from "../../assets/img/category_veg-options.png";
import vegShopLogo from "../../assets/img/category_veg-store.png";
import healthStoreLogo from "../../assets/img/category_health-store.png";
import bakeryLogo from "../../assets/img/category_bakery.png";
import barJuiceLogo from "../../assets/img/category_juice-bar.png";
import coffeeLogo from "../../assets/img/category_coffee-tea.png";
import iceCreamLogo from "../../assets/img/category_ice-cream.png";
import spaLogo from "../../assets/img/category_spa.png";
import otherLogo from "../../assets/img/category_other.png";

const displayVeg = (props) => {
  // console.log(props);
  if (props === "vegan") {
    return (
      <span style={{ backgroundColor: "#195B0A" }} className="logoM">
        <img src={veganlogo} alt="logo végan" /> <p>Vegan</p>
      </span>
    );
  } else if (props === "vegetarian") {
    return (
      <span style={{ backgroundColor: "#88298F" }} className="logoM">
        <img src={veggielogo} alt="logo végétarien" /> <p>Vegetarien</p>
      </span>
    );
  } else if (props === "veg-options") {
    return (
      <span style={{ backgroundColor: "#E47675" }} className="logoM">
        <img src={vegoptlogo} alt="logo vég-options" /> <p>Veg-options</p>
      </span>
    );
  } else if (props === "Veg Store") {
    return (
      <span style={{ backgroundColor: "#195B0A" }} className="logoM">
        <img src={vegShopLogo} alt="logo végan" /> <p>Veg Store</p>
      </span>
    );
  } else if (props === "Health Store") {
    return (
      <span style={{ backgroundColor: "#B7AA2A" }} className="logoM">
        <img src={healthStoreLogo} alt="logo végan" /> <p>Veg Store</p>
      </span>
    );
  } else if (props === "Bakery") {
    return (
      <span style={{ backgroundColor: "#824B1D" }} className="logoM">
        <img src={bakeryLogo} alt="logo végan" /> <p>Bakery</p>
      </span>
    );
  } else if (props === "Juice Bar") {
    return (
      <span style={{ backgroundColor: "#F4B855" }} className="logoM">
        <img src={barJuiceLogo} alt="logo végan" /> <p>Juice Bar</p>
      </span>
    );
  } else if (props === "Coffee") {
    return (
      <span style={{ backgroundColor: "#C27900" }} className="logoM">
        <img src={coffeeLogo} alt="logo végan" /> <p>Coffee & Tea</p>
      </span>
    );
  } else if (props === "Ice Cream") {
    return (
      <span style={{ backgroundColor: "#EF447F" }} className="logoM">
        <img src={iceCreamLogo} alt="logo végan" /> <p>Ice Cream</p>
      </span>
    );
  } else if (props === "Spa") {
    return (
      <span style={{ backgroundColor: "#3ED6D0 " }} className="logoM">
        <img src={spaLogo} alt="logo végan" /> <p>Spa</p>
      </span>
    );
  } else {
    return (
      <span style={{ backgroundColor: "#598BCF" }} className="logoM">
        <img src={otherLogo} alt="logo végan" /> <p>Other</p>
      </span>
    );
  }
};

export default displayVeg;
