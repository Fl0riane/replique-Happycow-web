import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import data from "../assets/data.json";

const Restaurant = ({ data }) => {
  console.log(data);
  return (
    <section className="container ">
      <div className=" wrap">
        {data.map((elem) => {
          return <RestaurantCard elem={elem} key={elem.placeId} />;
        })}
      </div>
    </section>
  );
};
export default Restaurant;
