import "./researchPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
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

const research = () => {
  const location = useLocation();
  const research = location.state.research;
  const handleSearch = location.state.handleSearch;

  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const numberOfPage = Math.ceil(counter / 81);

  const displayPage = (numberOfPage) => {
    const tab = [];
    if (numberOfPage > 1) {
      for (let i = 0; i < numberOfPage; i++) {
        tab.push(
          <button
            onClick={() => {
              console.log(numberOfPage);
              setPage(i);
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
          `http://localhost:3000/restaurants/country?address=${research}&type=${type}&page=${page}`
        );

        setData(response.data.restaurants);
        setCounter(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [research, type, page]);

  return IsLoading ? (
    <p>Is loading</p>
  ) : (
    <main className="researchPage">
      <section>
        <p>Results for "{research}"</p>
        <span>
          <input type="text" onChange={handleSearch} />
          <button className="icon" onClick={handleSearch}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </span>
        <div className="filter">
          <button
            onClick={() => {
              console.log("clic vegan");
              setType("vegan");
            }}
          >
            <img src={veganlogo} alt="logo vegan" />
            Végan
          </button>
          <button
            onClick={() => {
              console.log("clic vegé");
              setType("vegetarian");
            }}
          >
            <img src={veggielogo} alt="logo végé" /> Vegetarian
          </button>
          <button
            onClick={() => {
              console.log("clic vegOptions");
              setType("veg-options");
            }}
          >
            <img src={vegoptlogo} alt="logo végéOptions" />
            Veg-options
          </button>
          <button
            onClick={() => {
              console.log("clic vegOptions");
              setType("");
            }}
          >
            Reset filters
          </button>
        </div>
        <nav>
          <button
            onClick={() => {
              console.log(`page ${page - 1}`);
              setPage(page - 1);
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-angle-left"
              style={{ color: "#a2a5a9" }}
            />
          </button>
          {displayPage(numberOfPage)}
          <button
            onClick={() => {
              console.log(`page ${page + 1}`);
              setPage(page + 1);
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-angle-right"
              style={{ color: "#a2a5a9" }}
            />
          </button>
        </nav>
        <div className="wrap2">
          {data.map((elem) => {
            return (
              <div className="card">
                <Link to={`/restaurant/${elem.placeId}`}>
                  <img src={elem.pictures[0]} alt="premiere photo" />
                  <h5>{elem.name}</h5>
                  <p>{displaystars(elem.rating)}</p>
                  <p>{elem.type}</p>
                </Link>
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
                let iconImg = "";

                if (elem.type === "vegan") {
                  iconImg = veganIcon;
                } else if (elem.type === "vegetarian") {
                  iconImg = vegeIcon;
                } else if (elem.type === "veg-options") {
                  iconImg = vegOption;
                } else if (elem.type === "Veg Store") {
                  iconImg = vegShop;
                } else {
                  iconImg = otherLogo;
                }

                const icon = new L.Icon({
                  iconUrl: iconImg,
                  iconSize: [30, 35],
                });

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
