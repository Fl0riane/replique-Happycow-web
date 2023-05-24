import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero/Hero";

import RestaurantCard from "../components/RestaurantCard/RestaurantCard";

const Home = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        setData(response.data);
        console.log(response.data.type);
        setIsLoading(false);
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
      <Hero />
      <section className="container ">
        <h2>Vegan Food Near Me</h2>
        <div className=" wrap">
          {data.map((elem) => {
            return <RestaurantCard elem={elem} key={elem.placeId} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
