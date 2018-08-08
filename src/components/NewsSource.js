import React from "react";

const NewsSource = ({ url, headline, publication }) => (
  <p>
    {headline} | <a href={url}>{publication}</a>
  </p>
);

export default NewsSource;
