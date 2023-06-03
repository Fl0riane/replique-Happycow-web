import "./addListPage.css";
import displaystars from "../../utils/displaystars";
import displayLogo from "../../utils/displayLogo";
import { Link } from "react-router-dom";
const addList = ({ favorites }) => {
  const changeCase = (elem) => {
    return elem.toUpperCase();
  };

  return (
    <div className="add">
      {favorites.map((elem) => {
        return (
          <section key={elem.placeId}>
            <div className="card2" key={elem.placeId}>
              <Link to={`/restaurant/${elem._id}`}>
                {elem.pictures.length > 0 ? (
                  <img src={elem.pictures[0]} alt="premiere photo" />
                ) : (
                  <span className="imgReplace">{displayLogo(elem.type)}</span>
                )}
                <div>
                  <span>
                    <p> {displayLogo(elem.type)}</p>{" "}
                    <h5> {changeCase(elem.name)}</h5>
                  </span>

                  <h5>{displaystars(elem.rating)}</h5>
                </div>
              </Link>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default addList;
