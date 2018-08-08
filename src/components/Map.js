import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import InfoWindow from "../containers/InfoWindow";

function extractPosition(point) {
  return {
    lat: parseFloat(point.latitude),
    lng: parseFloat(point.longitude)
  };
}

export default props => {
  if (props.points.length === 0) return null;

  const markers = props.points.map(point => {
    return (
      <Marker position={extractPosition(point)} key={point.id}>
        <InfoWindow {...point} />
      </Marker>
    );
  });

  const style = {
    height: "100%",
    width: "100%",
    margin: 0
  };

  return (
    <div className="main-map" style={style}>
      <Map
        bounds={props.points.map(point => extractPosition(point))}
        boundsOptions={{ padding: [40, 40] }}
      >
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {markers}
      </Map>
    </div>
  );
};
