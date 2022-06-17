import React from "react";

import classes from "./NewsItem.module.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="pt-20">
      <div className="shadow-md">
        <div>
          <img
            className="w-60 h-60"
            src={urlToImage}
            alt={urlToImage}
          />
        </div>
        <div>
          <h3>
            <a href={url}>{title}</a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
