import React, { useRef, useState } from "react";
import useProductRequest from "../../hooks/useRequest";

const Products = ({ item }) => {
  const { sendRequest } = useProductRequest({
    method: "DELETE",
  });

  const { sendRequest: editRequest } = useProductRequest({
    method: "PUT",
  });
  const description = useRef(item.Description);
  const title = useRef(item.Title);
  const [state, setState] = useState(false);

  const handleDelete = (id) => {
    sendRequest(null, `https://crudapi.co.uk/api/v1/products/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const handleEdit = () => {
    setState(!state);
  };

  const handleSave = (id) => {
    setState(false);
    const updatedData = {
      Description: description.current.value,
      Title: title.current.value,
    };

    editRequest(updatedData, `https://crudapi.co.uk/api/v1/products/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div key={item?._uuid} style={{ color: "black" }} className="all-product">
      <div className="products-view">
        <img src={item?.image} alt="" />
        <div className="product-view-text">
          {state ? (
            <input type="text" ref={title} defaultValue={item?.Title} />
          ) : (
            <h1>{item?.Title}</h1>
          )}


          {state ? (
            <input
              type="text"
              ref={description}
              defaultValue={item?.Description}
            />
          ) : (
            <p>{item?.Description}</p>
          )}

{state && (
            <button onClick={() => handleSave(item?._uuid)}>Save</button>
          )}

          <div className="products-buttons">
            <button onClick={() => handleDelete(item?._uuid)}>DELETE</button>
            <button onClick={handleEdit}>{state ? "cancel" : "edit"}</button>

            {state && <div>EDIT MODE</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
