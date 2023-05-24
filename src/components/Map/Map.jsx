import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ lat, lng }) => (
  <div>
    {lat}
    {lng}
  </div>
);

const SimpleMap = ({ lat, lng }) => {
  const defaultProps = {
    center: {
      lat: 48.8564449,
      lng: 2.4002913,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
export default SimpleMap;
