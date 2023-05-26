const veganIcon = L.icon({
  iconUrl: "src/assets/img/vegetarian_marker.png",
  iconSize: [25, 25],
});

const vegeIcon = L.icon({
  iconUrl: "src/assets/img/vegetarian_marker.png",
  iconSize: [25, 25],
});

const vegeOptIcon = L.icon({
  iconUrl: "src/assets/img/veg_options_marker.png",
  iconSize: [25, 25],
});

const vegeShopIcon = L.icon({
  iconUrl:
    "/Users/flopel/Desktop/LeReacteur/repliques/happy-cow-frontEnd/src/assets/img/veg_shop_marker.png",
  iconSize: [25, 25],
});

const displayIcon = (props) => {
  if (props === "vegan") {
    return veganIcon;
  }

  if (props === "vegetarian") {
    return vegeIcon;
  }

  if (props === "veg-options") {
    return vegeOptIcon;
  }
  if (props === "Veg Store") {
    return vegeShopIcon;
  }
};

export default displayIcon;
