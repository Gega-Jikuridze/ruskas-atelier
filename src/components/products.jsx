import { useState } from "react";
import { ProductsData } from "../data/ProductsData";

const Products = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    woman: false,
    man: false,
    kid: false,
    charch: false,
    national: false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [id]: checked,
    }));
  };

  const Products = ProductsData;
  console.log(Products);

  return (
    <div className="products-content">
      <h1 className="filter-h1">ფილტრი</h1>

      <div className="products">
        <form className="product-filter">
          <label htmlFor="woman">
            ქალი
            <input
              type="checkbox"
              id="woman"
              checked={checkboxValues.woman}
              onChange={handleCheckboxChange}
            />
          </label>
          <label htmlFor="man">
            კაცი
            <input
              type="checkbox"
              id="man"
              checked={checkboxValues.man}
              onChange={handleCheckboxChange}
            />
          </label>
          <label htmlFor="kid">
            ბავშვი
            <input
              type="checkbox"
              id="kid"
              checked={checkboxValues.kid}
              onChange={handleCheckboxChange}
            />
          </label>
          <label htmlFor="charch">
            საეკლესიო
            <input
              type="checkbox"
              id="charch"
              checked={checkboxValues.charch}
              onChange={handleCheckboxChange}
            />
          </label>
          <label htmlFor="national">
            ნაციონალური
            <input
              type="checkbox"
              id="national"
              checked={checkboxValues.national}
              onChange={handleCheckboxChange}
            />
          </label>
        </form>

        <div className="product-cards">
          {Products.map((el) => (
            <div className="product-card" key={el.id}>
              <img src={el.image} alt="" />
              <h1>{el.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
