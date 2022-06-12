import React, { useState } from "react";


import ProductItem from "./ProductItem";

const ProductList = () => {
  const DUMMY_PRODUCTS = [
    {
      id: "m1",
      title: "Apa itu Stunting",
      body: "LOREM IPSUMM",
      url: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
    },
    {
      id: "m2",
      title: "Berita Terkini",
      body: "LOREM IPSUMM",
      url: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
    },
    {
      id: "m3",
      title: "Informasi Gizi",
      body: "LOREM IPSUMM",
      url: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
    },
    {
      id: "m4",
      title: "MPASI",
      body: "MPASI",
      url: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
    },
  ];

  const dummyProduct = DUMMY_PRODUCTS.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      body={item.body}
      url={item.url}
    />
  ));

  return <>{dummyProduct}</>;
};

export default ProductList;
