import React, { Component } from "react";
import Map from "./components/Map";

class App extends Component {
  state = {
    buildings: []
  };

  componentDidMount() {
    fetch("/api/buildings")
      .then(res => res.json())
      .then(buildings => this.setState({ buildings: buildings }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <Map points={this.state.buildings} />
      </div>
    );
  }
}

export default App;
