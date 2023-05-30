import "./researchPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import displaystars from "../../utils/displaystars";
import veganlogo from "../../assets/img/category_vegan.png";
import veggielogo from "../../assets/img/category_vegetarian.png";
import vegoptlogo from "../../assets/img/category_veg-options.png";

import veganIcon from "../../assets/img/vegan_marker.png";
import vegeIcon from "../../assets/img/vegetarian_marker.png";
import vegOption from "../../assets/img/veg_options_marker.png";
import vegShop from "../../assets/img/veg_shop_marker.png";
import otherLogo from "../../assets/img/other_marker.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const research = ({ handleSearch }) => {
  const location = useLocation();
  let research = location.state.research;
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const numberOfPage = Math.ceil(counter / 81);
  console.log(data.type);
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

  const displayPage = (numberOfPage) => {
    let page = 1;
    const tab = [];
    if (numberOfPage > 1) {
      for (let i = 0; i <= numberOfPage; i++) {
        tab.push(
          <button
            onClick={() => {
              page = page + 1;
            }}
          >
            {i + 1}
          </button>
        );
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
        console.log(data.type);
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
        <div className="filter">
          <button
            onClick={() => {
              type = "vegan";
            }}
          >
            <img src={veganlogo} alt="logo vegan" />
            Végan
          </button>
          <button>
            <img src={veggielogo} alt="logo végé" /> Vegetarian
          </button>
          <button>
            <img src={vegoptlogo} alt="logo végéOptions" />
            Veg-options
          </button>
        </div>
        <nav>{displayPage(numberOfPage)}</nav>
        <div className="wrap2">
          {data.map((elem) => {
            return (
              <div className="card">
                <img src={elem.pictures[0]} alt="premiere photo" />
                <h5>{elem.name}</h5>
                <p>{displaystars(elem.rating)}</p>
                <p>{elem.type}</p>
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
                    icon={icon}
                  >
                    <Popup className="custom-popup">
                      <img src={elem.pictures[0]} alt="img" />
                      <h4>{elem.name}</h4>
                      <p>{displaystars(elem.rating)}</p>
                      <h3>{elem.address}</h3>
                    </Popup>
                  </Marker>
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
