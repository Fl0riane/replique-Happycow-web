import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import displayStars from "../../utils/displaystars";
import displayVeg from "../../utils/DisplayVeg/displayVeg";
import displayIcon from "../../utils/displayIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./restaurant.css";

const Restaurant = ({ placeId }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [hidden, setHidden] = useState(true);
  const open = () => {
    const findOpen = data.description.indexOf("Open");
    return data.description.slice(findOpen);
  };

  // const iconimg = () => {
  //   const findIcon = displayIcon(data.type);
  //   return new Icon({
  //     iconUrl: { findIcon },
  //     iconSize: [25, 25],
  //   });
  // };

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
                <h3>All Photos</h3> <p>({data.pictures.length})</p>
              </button>
            )}
          </div>

          <p>{data.description}</p>
        </section>
        <section className="rightCol">
          <div>
            <MapContainer
              className="map"
              center={[48.866667, 2.333333]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                position={[data.location.lat, data.location.lng]}
                // icon={iconimg}
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
