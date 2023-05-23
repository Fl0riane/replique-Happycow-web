import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const displayStars = (number) => {
  const tab = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= number) {
      if (Number.isInteger(number)) {
        tab.push(
          <FontAwesomeIcon
            icon="fa-solid fa-star"
            style={{ color: "#f8c535" }}
          />
        );
      } else {
        if (i === number) {
          tab.push(
            <FontAwesomeIcon
              icon="fa-solid fa-star"
              style={{ color: "#f8c535" }}
            />
          );
        }
        if (number < 5 && number > i)
          tab.push(
            <FontAwesomeIcon
              icon="fa-solid  fa-star-half-stroke"
              style={{ color: "#f8c535" }}
            />
          );
      }
    } else {
      // sinon j'ajoute une étoile grise
      tab.push(
        <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#a5a5a5" }} />
      );
    }
  }

  return tab;
};

export default displayStars;
