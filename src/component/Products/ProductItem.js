import React from "react";

import classes from "./ProductItem.module.css";

const ProductItem = ({ title, url, body }) => {
  return (
    <div className={classes["card-container"]}>
      <div className={classes["image-container"]}>
        <img src={url} alt={url} />
      </div>
      <div className={classes["card-title"]}>
        <h3>
          <a href={url}>{title}</a>
        </h3>
      </div>
      <div className={classes["card-body"]}>
        {/* <p>{body}</p> */}
        <p>
          lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor
          incididunt ut labore et, consectetur adipiscing elit, sed do eiusmod
          tempor inc
        </p>
       <button>Baca selengkapnya..</button>
      </div>
    </div>
  );
};

export default ProductItem;
