import "./restaurantPage.css";
import displayStars from "../../utils/displaystars";
import displayVeg from "../../utils/displayVeg";
import Map from "../Map/Map";

const restaurantPage = ({ elem, index }) => {
  const allImg = elem.pictures;
  const hiddenpic = allImg.length - 4;
  console.log(hiddenpic);

  console.log(elem);
  return (
    <section className="container">
      <div>
        <h2>{elem.name}</h2>

        <div>{displayStars(elem.rating)}</div>
        <span>{displayVeg(elem.type)} </span>
        <section>
          <div className="blocImg">
            {allImg.map((elem, index) => {
              return (
                <div key={index}>
                  <img className="littlePic" src={elem} alt="restaurant pic" />
                </div>
              );
            })}
          </div>
          {allImg.length > 4}
          <button>
            <h3>all photos</h3> <p>{hiddenpic}</p>
          </button>

          <p>{elem.description}</p>
        </section>
        <section>
          <Map lng={elem.location.lng} lat={elem.location.lat} />
        </section>
      </div>
    </section>
  );
};

export default restaurantPage;
