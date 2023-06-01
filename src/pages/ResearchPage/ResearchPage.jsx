import "./researchPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

//------------------utils----------------------//
import displaystars from "../../utils/displaystars";
import displayLogo from "../../utils/displayLogo";

//-----------------logo------------------------------//

import veganlogo from "../../assets/img/category_vegan.png";
import veggielogo from "../../assets/img/category_vegetarian.png";
import vegoptlogo from "../../assets/img/category_veg-options.png";

//-------------------icon------------------------------//
import veganIcon from "../../assets/img/vegan_marker.png";
import vegeIcon from "../../assets/img/vegetarian_marker.png";
import vegOption from "../../assets/img/veg_options_marker.png";
import vegShop from "../../assets/img/veg_shop_marker.png";
import heathlStoreIcon from "../../assets/img/health_store_marker.png";
import bakeryIcon from "../../assets/img/bakery_marker.png";
import juiceBarIcon from "../../assets/img/juice_bar_marker.png";
import coffeeIcon from "../../assets/img/coffee_marker.png";
import IceCreamIcon from "../../assets/img/ice_cream_marker.png";
import spaIcon from "../../assets/img/spa_marker.png";
import other from "../../assets/img/other_marker.png";

const researchPage = ({ handleSearch, research }) => {
  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const numberOfPage = Math.ceil(counter / 81);
  const changeCase = (elem) => {
    return elem.toUpperCase();
  };

  const displayPage = (numberOfPage) => {
    const tab = [];
    for (let i = 1; i <= numberOfPage; i++) {
      tab.push(
        <button
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </button>
      );
    }
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
          <input type="text" onChange={handleSearch} value={research} />
          <button className="icon">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              size="xl"
              style={{ color: "#fcfcfd" }}
            />
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
        <div className="pagin">
          <button
            onClick={() => {
              console.log(`page ${page - 1}`);
              setPage(page - 1);
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-angle-left"
              size="xl"
              style={{ color: "#a2a5a9" }}
            />
          </button>
          <nav>{displayPage(numberOfPage)}</nav>{" "}
          <button
            onClick={() => {
              console.log(`page ${page + 1}`);
              setPage(page + 1);
            }}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-angle-right"
              size="xl"
              style={{ color: "#a2a5a9" }}
            />
          </button>
        </div>
        <div className="wrap2">
          {data.map((elem) => {
            let hoverClassName = "";
            let borderClass = "";

            if (elem.type === "vegan") {
              hoverClassName = "green";
              borderClass = "greenBorder";
            } else if (elem.type === "vegetarian") {
              hoverClassName = "purple";
              borderClass = "purpleBorder";
            } else if (elem.type === "veg-options") {
              hoverClassName = "red";
              borderClass = "redBorder";
            } else if (elem.type === "Veg Store") {
              hoverClassName = "green";
              borderClass = "blueBorder";
            } else if (elem.type === "Health Store") {
              hoverClassName = "yellow";
              borderClass = "blueBorder";
            } else if (elem.type === "Bakery") {
              hoverClassName = "brown";
              borderClass = "blueBorder";
            } else if (elem.type === "Juice Bar") {
              hoverClassName = "beige";
              borderClass = "blueBorder";
            } else if (elem.type === "Coffee") {
              hoverClassName = "lightbrown";
              borderClass = "blueBorder";
            } else if (elem.type === "Ice Cream") {
              hoverClassName = "pink";
              borderClass = "blueBorder";
            } else if (elem.type === "Spa") {
              hoverClassName = "lightblue";
              borderClass = "blueBorder";
            } else {
              hoverClassName = "blue";
              borderClass = "greenBorder";
            }

            return (
              <div className={`card ${borderClass}`} key={elem.id}>
                <Link to={`/restaurant/${elem.placeId}`}>
                  <div className={hoverClassName}>
                    <h5> {displayLogo(elem.type)}</h5>
                    <h5> {changeCase(elem.type)}</h5>
                    <h4 style={{ fontWeight: "600" }}>
                      {changeCase(elem.name)}
                    </h4>
                    <h5>{elem.address}</h5>
                  </div>

                  <img src={elem.pictures[0]} alt="premiere photo" />

                  <h5>{elem.name}</h5>
                  <p>{displaystars(elem.rating)}</p>
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

                iconImg = vegShop;
                if (elem.type === "vegan") {
                  iconImg = veganIcon;
                } else if (elem.type === "vegetarian") {
                  iconImg = vegeIcon;
                } else if (elem.type === "veg-options") {
                  iconImg = vegOption;
                } else if (elem.type === "Veg Store") {
                  iconImg = vegShop;
                } else if (elem.type === "Health Store") {
                  iconImg = heathlStoreIcon;
                } else if (elem.type === "Bakery") {
                  iconImg = bakeryIcon;
                } else if (elem.type === "Juice Bar") {
                  iconImg = juiceBarIcon;
                } else if (elem.type === "Coffee") {
                  iconImg = coffeeIcon;
                } else if (elem.type === "Ice Cream") {
                  iconImg = IceCreamIcon;
                } else if (elem.type === "Spa") {
                  iconImg = spaIcon;
                } else {
                  iconImg = other;
                }

                const icon = new L.Icon({
                  iconUrl: iconImg,
                  iconSize: [30, 35],
                });

                return (
                  <Marker
                    position={[elem.location.lat, elem.location.lng]}
                    icon={icon}
                    key={elem.id}
                  >
                    <Popup className="custom-popup">
                      <img src={elem.pictures[0]} alt="img" />
                      <Link to={`/restaurant/${elem.placeId}`}>
                        <h4>{elem.name}</h4>
                      </Link>
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
export default researchPage;
