import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./researchPage.css";
import displaystars from "../../utils/displaystars";

import veganIcon from "../../assets/img/vegan_marker.png";
import vegeIcon from "../../assets/img/vegetarian_marker.png";
import vegOption from "../../assets/img/veg_options_marker.png";
import vegShop from "../../assets/img/veg_shop_marker.png";
import otherLogo from "../../assets/img/other_marker.png";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
const research = ({ handleSearch }) => {
  const location = useLocation();
  let research = location.state.research;
  const [data, setData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const numberOfPage = Math.ceil(counter / 81);

  // let iconImg = "";

  // if (data.type === "vegan") {
  //   iconImg = veganIcon;
  // } else if (data.type === "vegetarian") {
  //   iconImg = vegeIcon;
  // } else if (data.type === "veg-options") {
  //   iconImg = vegOption;
  // } else if (data.type === "Veg Store") {
  //   iconImg = vegShop;
  // } else {
  //   iconImg = otherLogo;
  // }

  // const icon = new L.Icon({
  //   iconUrl: iconImg,
  //   iconSize: [30, 35],
  // });

  const displayPage = (numberOfPage) => {
    const tab = [];
    if (numberOfPage > 1) {
      for (let i = 0; i <= numberOfPage; i++) {
        tab.push(<button onClick={console.log("clic")}>{i + 1}</button>);
      }
    } else tab.push(<button>1</button>);
    return tab;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/restaurants/country?address=${research}`
        );
        console.log(response.data);
        setData(response.data.restaurants);
        setCounter(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [research]);

  return IsLoading ? (
    <p>Is loading</p>
  ) : (
    <main className="researchPage">
      <section>
        <p>Results for "{research}"</p>
        <span>
          <input type="text" placeholder={research} onChange={handleSearch} />
          <button className="icon" onClick={handleSearch}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </span>
        <div>
          <button>Végan</button> <button>Vegetarian</button>
          <button>Veg-options</button>
        </div>

        <nav>{displayPage(numberOfPage)}</nav>
        <div className="wrap2">
          {data.map((elem) => {
            return (
              <div className="card" key={elem.id}>
                <img src={elem.pictures[0]} alt="premier photo" />
                <p>{elem.name}</p>
                <p>{displaystars(elem.rating)}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div>
          <MapContainer
            className="BigMap"
            center={[48.856614, 2.3522219]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <div>
              {data.map((elem) => {
                return (
                  <Marker
                    position={[elem.location.lat, elem.location.lng]}
                    // icon={icon}
                  />
                );
              })}
            </div>
          </MapContainer>
        </div>
      </section>
    </main>
  );
};
export default research;
