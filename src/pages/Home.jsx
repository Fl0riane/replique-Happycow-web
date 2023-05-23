import Homeimg from "../assets/img/Homeimg.jpg";
import Hero from "../components/Hero/Hero";
import data from "../assets/data.json";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        {data.map((elem) => {
          console.log(elem);
          return <RestaurantCard elem={elem} key={elem.placeId} />;
        })}
      </div>
    </div>
  );
};

export default Home;
