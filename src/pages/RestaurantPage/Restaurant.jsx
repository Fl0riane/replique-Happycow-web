import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import displayStars from "../../utils/displaystars";
import displayVeg from "../../utils/DisplayVeg/displayVeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./restaurant.css";
import veganIcon from "../../assets/img/vegan_marker.png";
import vegeIcon from "../../assets/img/vegetarian_marker.png";
import vegOption from "../../assets/img/veg_options_marker.png";
import vegShop from "../../assets/img/veg_shop_marker.png";
import otherLogo from "../../assets/img/other_marker.png";

const Restaurant = ({ placeId }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [hidden, setHidden] = useState(true);

  const open = () => {
    const findOpen = data.description.indexOf("Open");
    return data.description.slice(findOpen);
  };

  let iconImg = "";

  if (data.type === "vegan") {
    iconImg = veganIcon;
  } else if (data.type === "vegetarian") {
    iconImg = vegeIcon;
  } else if (data.type === "veg-options") {
    iconImg = vegOption;
  } else if (data.type === "Veg Store") {
    iconImg = vegShop;
  } else {
    iconImg = otherLogo;
  }

  const icon = new L.Icon({
    iconUrl: iconImg,
    iconSize: [30, 35],
  });

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
        <div className="star">{displayStars(data.rating)}</div>
        <span className="veg">{displayVeg(data.type)} </span>
      </div>
      <div className="row">
        <section className="leftCol">
          <div className="blocImg">
            {data.pictures.map((elem, index) => {
              return (
                <div key={index}>
                  <img className="littlePic" src={elem} alt="restaurant pic" />
                </div>
              );
            })}
            {data.pictures.length > 4 && (
              <button
                onClick={() => {
                  setHidden(false);
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-camera" />
                <p>All Photos</p> <p>({data.pictures.length})</p>
              </button>
            )}
          </div>

          <p>{data.description}</p>
        </section>
        <section className="rightCol">
          <div>
            <MapContainer
              className="map"
              center={[data.location.lat, data.location.lng]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                position={[data.location.lat, data.location.lng]}
                icon={icon}
              />
            </MapContainer>
          </div>

          <div>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <p>{data.address}</p>
            </span>

            <span>
              <FontAwesomeIcon icon="fa-solid fa-clock" />
              <p>{open(data.description)}</p>
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
