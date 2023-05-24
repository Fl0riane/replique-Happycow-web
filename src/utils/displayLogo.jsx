import veganlogo from "../assets/img/category_vegan.jpg";
import veggielogo from "../assets/img/category_vegetarian.jpg";
import vegoptlogo from "../assets/img/category_veg-options.jpg";

const displayVeg = (props) => {
  console.log(props);
  if (props === "Vegan") {
    return <img className="logo" src={veganlogo} alt="logo végan" />;
  }
  if (props === "vegetarian") {
    return <img className="logo" src={veggielogo} alt="logo végétarien" />;
  }

  if (props === "veg-options") {
    return <img className="logo" src={vegoptlogo} alt="logo vég-options" />;
  }
};

export default displayVeg;
