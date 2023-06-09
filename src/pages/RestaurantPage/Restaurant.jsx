import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import displayStars from "../../utils/displaystars";
import displayVeg from "../../utils/DisplayVeg/displayVeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "./restaurant.css";
import veganIcon from "../../assets/img/vegan_marker.png";
import vegeIcon from "../../assets/img/vegetarian_marker.png";
import vegOptionIcon from "../../assets/img/veg_options_marker.png";
import vegShopIcon from "../../assets/img/veg_shop_marker.png";
import healthStoreIcon from "../../assets/img/health_store_marker.png";
import bakeryIcon from "../../assets/img/bakery_marker.png";
import otherLogo from "../../assets/img/other_marker.png";
import juiceIcon from "../../assets/img/juice_bar_marker.png";
import coffeeLogo from "../../assets/img/coffee_marker.png";
import iceLogo from "../../assets/img/ice_cream_marker.png";
import spaLogo from "../../assets/img/spa_marker.png";
const Restaurant = () => {
  const params = useParams();
  const [data, setData] = useState({});
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
    iconImg = vegOptionIcon;
  } else if (data.type === "Veg Store") {
    iconImg = vegShopIcon;
  } else if (data.type === "Health Store") {
    iconImg = healthStoreIcon;
  } else if (data.type === "Bakery") {
    iconImg = bakeryIcon;
  } else if (data.type === "Juice Bar") {
    iconImg = juiceIcon;
  } else if (data.type === "Coffee") {
    iconImg = coffeeLogo;
  } else if (data.type === "Ice Cream") {
    iconImg = iceLogo;
  } else if (data.type === "Spa") {
    iconImg = spaLogo;
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
          `https://site--back-end-happy-cow--p2d7k4xwpzzq.code.run/restaurant/${params.id}`
        );
        const data = response.data;
        console.log("log data", data);
        setData(data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [params.id]);

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
          {data.pictures.length > 0 ? (
            <div className="blocImg">
              {data.pictures.map((elem) => {
                return (
                  <div key={elem.placeId}>
                    <img
                      className="littlePic"
                      src={elem}
                      alt="restaurant pic"
                    />
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
          ) : (
            <div className="blocImgReplace">
              <p>Been here? Please help us!</p>
              <FontAwesomeIcon
                icon="fa-solid fa-camera"
                size="xl"
                style={{ color: "#9069cd" }}
              />
              <p>Add your photos</p>
            </div>
          )}

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
              {data.description ? <p>{open(data.description)}</p> : ""}
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
