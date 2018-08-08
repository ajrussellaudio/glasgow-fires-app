import React from "react";
import FireInfo from "./FireInfo";

const BuildingInfo = ({
  name,
  address,
  category,
  history,
  wikipedia,
  fires
}) => (
  <div>
    <h3>{name}</h3>
    <p>
      {address}, Category: {category}
    </p>
    {history && <p>{history}</p>}
    {wikipedia && (
      <p>
        <a href={wikipedia}>Wikipedia</a>
      </p>
    )}
    {fires.map(fire => <FireInfo {...fire} key={fire.id} />)}
  </div>
);

export default BuildingInfo;
