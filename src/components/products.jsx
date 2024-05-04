import { useState } from "react";
import productImage from "../assets/product.png";


const Products = () => {

  const nav = ["ქალი", "კაცი", "ბავშვი", "საეკლესიო", "ნაციონალური"];


  const product = [
    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
      genger: 'female',
      color: 'red'
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className="products-content container">
      <h1 className="filter-h1">ფილტრი</h1>

    <div className="products">
      <div className="product-filter">
          {nav.map((el , index) => (
            <h1 key={index}>{el} <input type="checkbox" /></h1>
          ))}
      </div>

      <div className="product-cards">
        {product.map((el, index) => (
          <div className="product-card" key={index}>
            <img src={el.image} alt="" />
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
