import React, { useRef, useState } from "react";
import useProductRequest from "../../hooks/useRequest";
import UploadWidget from "./UploadWidget";

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
  const [url, updateUrl] = useState();
  const [, updateError] = useState();

  const handleOnUpload = (error, result, widget) => {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  };

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
      image: url,
    };

    if (url) {
      console.log(url);
    } else {
      window.alert("Please choose Photo");
    }

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
        {state ? (
          <div>
            <UploadWidget onUpload={handleOnUpload}>
              {({ open }) => {
                const handleOnClick = (e) => {
                  e.preventDefault();
                  setTimeout(() => {
                    console.log(open());
                  }, 500);
                  open();
                };
                return <button onClick={handleOnClick}>Upload Image</button>;
              }}
            </UploadWidget>
            {url && (
              <img style={{ width: 200, height: 200 }} src={url} alt="" />
            )}
          </div>
        ) : (
          <img src={item?.image[0]} alt="" />
        )}
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
