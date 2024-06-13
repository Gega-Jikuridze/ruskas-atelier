import { useState } from "react";
import NewProduct from "./NewProduct";
import useFetch from "../../hooks/useFetch";
import Products from "./Products";
import SetAboutMe from "./setAboutMe";

const ControlPanel = ({ setUser, user }) => {
  const [addNew, setAddNew] = useState(false);
  const [editAboutMe, setEditAboutMe] = useState(false);

  const { fetchRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/products",
    method: "GET",
  });

  return (
    <div className="control-panel">
      <div className="control-panel-edit">
        <h1>
          დაამატე პროდუქცია
          <button onClick={() => setAddNew(!addNew)}>დამატება</button>
        </h1>

        <h1>
          ჩვენ შესახებ
          <button onClick={() => setEditAboutMe(!editAboutMe)}>შეცვლა</button>
        </h1>

        <h1>
          კონტაქტი
          <button onClick={() => setUser(!user)}>მომხმარებელი</button>
        </h1>
      </div>

      {addNew && <NewProduct />}
      {addNew && (
        <div className="overlay" onClick={() => setAddNew(!addNew)}></div>
      )}

      {editAboutMe && <SetAboutMe setAddNew={setAddNew} />}
      {editAboutMe && (
        <div
          className="overlay"
          onClick={() => setEditAboutMe(!editAboutMe)}
        ></div>
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
