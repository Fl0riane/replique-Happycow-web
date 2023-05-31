import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";

const Home = ({ handleSearch, research }) => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/restaurants");
        setData(response.data);
        setIsLoading(false);
        // console.log(response.data);
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
      {/* <Modal setVisible={setVisible} /> */}
    </div>
  );
};

export default Home;
