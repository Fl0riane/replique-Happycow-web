import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero/Hero";

import RestaurantCard from "../components/RestaurantCard/RestaurantCard";

const Home = () => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const [research, setResearch] = useState("");
  const handleSearch = (event) => {
    setResearch(event.target.value);
  };

  console.log(research);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/restaurants");
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
            return <RestaurantCard elem={elem} key={elem.placeId} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
