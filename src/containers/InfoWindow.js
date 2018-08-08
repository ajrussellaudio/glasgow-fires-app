import React from "react";
import { Popup } from "react-leaflet";
import BuildingInfo from "../components/BuildingInfo";

class InfoWindow extends React.Component {
  state = {};

  componentDidMount() {
    fetch(`/api/buildings/${this.props.id}`)
      .then(res => res.json())
      .then(building => this.setState({ ...building }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Popup>
        <BuildingInfo {...this.state} />
      </Popup>
    );
  }
}

export default InfoWindow;
