import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantPage from "../components/RestaurantPage/RestaurantPage";

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
            return (
              id === elem.placeId.toString() && (
                <RestaurantPage key={elem.placeId} elem={elem} />
              )
            );
          })}
        </div>
        {/* <div>{data.find((element) => element.placeId.toString() === id)}</div> */}
      </section>
    </div>
  );
};
export default Restaurant;
