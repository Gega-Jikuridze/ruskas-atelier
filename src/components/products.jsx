import { useNavigate } from "react-router-dom";
import { useSearch } from "../adminPages/context/SearchFilterContext";

const Products = () => {
  const navigate = useNavigate();

  const { displayProducts, handleCheckboxChange, checkboxValues } = useSearch();

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
          {displayProducts?.map((el) => (
            <div
              className="product-card"
              key={el.id}
              onClick={() => navigate(`/products/${el.id}`)}
            >
              <img src={el.image[0]} alt="" />
              <h1>{el.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
