import veganlogo from "../assets/img/category_vegan.jpg";
import veggielogo from "../assets/img/category_vegetarian.jpg";
import vegoptlogo from "../assets/img/category_veg-options.jpg";

const displayVeg = (props) => {
  console.log(props);
  if (props === "Vegan") {
    return (
      <span>
        <img src={veganlogo} alt="logo végan" /> <p>Vegan</p>
      </span>
    );
  }
  if (props === "vegetarian") {
    return (
      <span>
        <img src={veggielogo} alt="logo végétarien" /> <p>Vegetarien</p>
      </span>
    );
  }

  if (props === "veg-options") {
    return (
      <span>
        <img src={vegoptlogo} alt="logo vég-options" /> <p>Veg-options</p>
      </span>
    );
  }
};

export default displayVeg;
