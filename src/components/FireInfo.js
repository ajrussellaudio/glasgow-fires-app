import React from "react";
import moment from "moment";
import NewsSource from "./NewsSource";

const FireInfo = ({ date, cause, deaths, injuries, aftermath, sources }) => (
  <div>
    <h4>{moment(date).format("dddd, Do MMMM YYYY")}</h4>
    <p>Cause: {cause}</p>
    <p>
      Deaths: {deaths} | Injuries: {injuries}
    </p>
    {aftermath && <p>{aftermath}</p>}
    <ul>
      {sources.map(source => (
        <li key={source.id}>
          <NewsSource {...source} />
        </li>
      ))}
    </ul>
  </div>
);

export default FireInfo;
