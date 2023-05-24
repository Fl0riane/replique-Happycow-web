import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";
import { useEffect, useState } from "react";
import axios from "axios";

const Restaurant = ({ placeId }) => {
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [placeId]);

  return IsLoading ? (
    <p>is Laoding</p>
  ) : (
    <div>
      <section className="container ">
        <div className=" wrap">
          {data.map((elem) => {
            console.log(id);
            console.log("log elem", elem.placeId);
            console.log("log ", elem.name);
            return id === elem.placeId && <h3>{elem.name}</h3>;
          })}
        </div>
      </section>
    </div>
  );
};
export default Restaurant;
