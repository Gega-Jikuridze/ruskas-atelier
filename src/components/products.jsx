import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const navigate = useNavigate();

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

  const { fetchRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/products",
    method: "GET",
  });

  const newProducts = fetchRequest?.items.map((product) => ({
    title: product.Title,
    description: product.Description,
    category: product.Category,
    image: product.image,
    id: product._uuid,
  }));

  const filteredProducts = newProducts?.filter((product) => {
    if (
      !checkboxValues.woman &&
      !checkboxValues.man &&
      !checkboxValues.kid &&
      !checkboxValues.charch &&
      !checkboxValues.national
    ) {
      return true;
    }

    return (
      (checkboxValues.woman && product.category === "woman") ||
      (checkboxValues.man && product.category === "man") ||
      (checkboxValues.kid && product.category === "kid") ||
      (checkboxValues.charch && product.category === "charch") ||
      (checkboxValues.national && product.category === "national")
    );
  });

  console.log(newProducts);

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
          {filteredProducts?.map((el) => (
            <div
              className="product-card"
              key={el.id}
              onClick={() => navigate(`/products/${el.id}`)}
            >
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
