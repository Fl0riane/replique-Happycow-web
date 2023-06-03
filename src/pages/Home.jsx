import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";

const Home = ({
  handleSearch,
  research,
  handleUserData,
  setFavorites,
  addFavorite,
  favorites,
}) => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--back-end-happy-cow--p2d7k4xwpzzq.code.run/restaurants"
        );
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return IsLoading ? (
    <p>is Laoding</p>
  ) : (
    <div>
      <Hero research={research} handleSearch={handleSearch} />
      <section className="container ">
        <h2>Vegan Food Near Me</h2>
        <div className=" wrap">
          {data.restaurants.map((elem) => {
            console.log(elem.placeId);
            return (
              <RestaurantCard
                key={elem.placeId}
                handleUserData={handleUserData}
                setFavorites={setFavorites}
                favorites={favorites}
                addFavorite={addFavorite}
                elem={elem}
              />
            );
          })}
        </div>
      </section>
      {/* <Modal setVisible={setVisible} /> */}
    </div>
  );
};

export default Home;
