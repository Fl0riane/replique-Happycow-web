import "./display.css";
import veganlogo from "../../assets/img/category_vegan.png";
import veggielogo from "../../assets/img/category_vegetarian.png";
import vegoptlogo from "../../assets/img/category_veg-options.png";
import vegStore from "../../assets/img/category_veg-store.png";
const displayVeg = (props) => {
  console.log(props);
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
        <img src={vegStore} alt="logo végan" /> <p>Veg Store</p>
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
