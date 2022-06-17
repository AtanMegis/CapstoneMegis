import React from "react";

import classes from "./ProductItem.module.css";

const ProductItem = ({ title, url, body }) => {
  return (
    <div className="shadow-2xl">
      <div className="">
        <img src={url} alt={url} className="w-68 h-40"/>
      </div>
      <div className="font-bold text-center pt-2">
        <h3>
          <a href={url}>{title}</a>
        </h3>
      </div>
      <div className="text-justify m-4">
        <p>
          lorem ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor
          incididunt ut labore et, consectetur adipiscing elit, sed do eiusmod
          tempor inc
        </p>
      </div>
      <div className="">
        <button className="hover:bg-white">Baca selengkapnya..</button>
      </div>
    </div>
  );
};

export default ProductItem;