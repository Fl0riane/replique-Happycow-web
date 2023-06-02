import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

const addList = ({ favorites }) => {
  console.log("log favorites add", favorites);
  return (
    <div>
      {favorites.map((elem) => {
        return <div className="container">{elem.name} </div>;
      })}
    </div>
  );
};

export default addList;
