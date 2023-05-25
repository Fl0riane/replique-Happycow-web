import "./restaurantPage.css";
import displayStars from "../../utils/displaystars";
import displayVeg from "../../utils/Display/displayVeg";
import Map from "../Map/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logofb from "../../assets/img/facebook-logo.jpg";
const restaurantPage = ({ elem, index }) => {
  const allImg = elem.pictures;
  const hiddenpic = allImg.length - 4;
  const description = elem.description;
  let findOpen = description.indexOf("Open");
  const open = description.slice(findOpen);
  const [hidden, setHidden] = useState(true);
  return (
    <main className="container">
      <div>
        <h2>{elem.name}</h2>
        <div>{displayStars(elem.rating)}</div>
        <span className="veg">{displayVeg(elem.type)} </span>
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

          <p>{elem.description}</p>
        </section>
        <section className="rightCol">
          <Map lng={elem.location.lng} lat={elem.location.lat} />
          <div>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <p>{elem.address}</p>
            </span>

            <span>
              <FontAwesomeIcon icon="fa-solid fa-clock" />
              <p>{open}</p>
            </span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-phone" />
              <p>{elem.phone}</p>
            </span>

            <span>
              <FontAwesomeIcon icon="fa-solid fa-link" />
              <a href={elem.website}> {elem.website}</a>
            </span>

            <span>
              <img src={logofb} alt="logo facebook" />
              <a href={elem.facebook}> {elem.facebook}</a>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default restaurantPage;
