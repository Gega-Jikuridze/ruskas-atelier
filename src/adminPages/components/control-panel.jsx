import { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
import useFetch from "../../hooks/useFetch";
import Products from "./Products";

const ControlPanel = () => {
  const [addNew, setAddNew] = useState(false);

  const { fetchRequest, loading, onFetch } = useFetch({
    url: "https://crudapi.co.uk/api/v1/products",
    method: "GET",
  });

  return (
    <div className="control-panel ">
      <div className="control-panel-edit">
        <h1>
          დაამატე პროდუქცია
          <button onClick={() => setAddNew(!addNew)}>დამატება</button>
        </h1>

        <h1>
          ჩვენ შესახებ
          <button onClick={() => setAddNew(!addNew)}>შეცვლა</button>
        </h1>

        <h1>
          კონტაქტი
          <button onClick={() => setAddNew(!addNew)}>შეცვლა</button>
        </h1>
      </div>

      {addNew && <NewProduct />}
      {addNew && (
        <div className="overlay" onClick={() => setAddNew(!addNew)}></div>
      )}
      <div className="products">
        <div className="product">
          {fetchRequest?.items.map((item) => (
            <div key={item._uuid}>
              <Products item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
