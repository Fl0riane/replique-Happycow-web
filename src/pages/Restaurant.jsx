import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import displayStars from "../utils/displaystars";
import displayVeg from "../utils/Display/displayVeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Restaurant = ({ placeId }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [hidden, setHidden] = useState(true);

  const allImg = data.pictures;

  const hiddenpic = allImg.length - 4;
  const description = data.description;
  let findOpen = description.indexOf("Open");
  const open = description.slice(findOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        const restaurant = response.data.find(
          (element) => element.placeId.toString() === id
        );
        setData(restaurant);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return IsLoading ? (
    <p>is Laoding</p>
  ) : (
    <main className="container">
      <div>
        <h2>{data.name}</h2>
        <div>{displayStars(data.rating)}</div>
        <span className="veg">{displayVeg(data.type)} </span>
      </div>
      <div className="row">
        <section className="leftCol">
          <div className="blocImg">
            {allImg.map((elem, index) => {
              return (
                <div key={index}>
                  <img className="littlePic" src={elem} alt="restaurant pic" />
                </div>
              );
            })}
            {allImg.length > 4 && (
              <button
                onClick={() => {
                  setHidden(false);
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-camera" />
                <h3>All Photos</h3> <p>({hiddenpic})</p>
              </button>
            )}
          </div>

          <p>{data.description}</p>
        </section>
        <section className="rightCol">
          <div>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <p>{data.address}</p>
            </span>

            <span>
              <FontAwesomeIcon icon="fa-solid fa-clock" />
              <p>{open}</p>
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <p>{data.phone}</p>
            </span>

            <span>
              <FontAwesomeIcon icon="fa-solid fa-link" />
              <a href={data.website}> {data.website}</a>
            </span>

            <span>
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              <a href={data.facebook}> {data.facebook}</a>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Restaurant;
