import React, { useRef, useState, useEffect } from "react";
import useProductRequest from "../../hooks/useRequest";

const Products = ({ item }) => {
  const { sendRequest } = useProductRequest({
    method: "DELETE",
  });

  const { sendRequest: editRequest } = useProductRequest({
    method: "PUT",
  });

  const [url, setUrl] = useState(
    Array.isArray(item?.image) ? item.image : [item.image]
  );

  const description = useRef(item.Description);
  const title = useRef(item.Title);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, updateError] = useState();

  useEffect(() => {
    setUrl(Array.isArray(item?.image) ? item.image : [item.image]);
  }, [item]);

  const handleOnUpload = async (e) => {
    const files = Array.from(e.target.files);
    const formDataArray = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "r0su9exk");
      return formData;
    });

    setLoading(true);
    updateError(null);

    try {
      const uploadPromises = formDataArray.map((formData) =>
        fetch(`https://api.cloudinary.com/v1_1/dnf8xaj6f/image/upload`, {
          method: "POST",
          body: formData,
        })
      );

      const responses = await Promise.all(uploadPromises);

      const dataPromises = responses.map((response) => response.json());
      const dataArray = await Promise.all(dataPromises);

      const newUrls = dataArray.map((data) => data.secure_url);
      setUrl((prevUrls) => [...prevUrls, ...newUrls]);
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      updateError("Failed to upload images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = (index) => {
    const newUrls = [...url];
    newUrls.splice(index, 1);
    setUrl(newUrls);
  };

  const handleDeleteProduct = (id) => {
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
    if (url.length === 0) {
      window.alert("Please choose a photo");
      return;
    }

    setState(false);
    const updatedData = {
      Description: description.current.value,
      Title: title.current.value,
      image: url,
    };

    editRequest(updatedData, `https://crudapi.co.uk/api/v1/products/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div key={item?._uuid} style={{ color: "black" }} className="all-product">
      <div className="products-view">
        {state ? (
          <div>
            <input multiple type="file" onChange={handleOnUpload} />
            {loading && <div>Loading...</div>}
            {url.length > 0 && (
              <div
                style={{ display: "flex", flexWrap: "wrap", maxWidth: "400px" }}
              >
                {url.map((imageUrl, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      style={{
                        width: 100,
                        height: 100,
                        margin: "5px",
                        cursor: "pointer",
                      }}
                      src={imageUrl}
                      alt={`Uploaded ${index + 1}`}
                      onClick={() => handleDeleteImage(index)}
                    />
                    <button
                      style={{ position: "absolute", top: 0, right: 0 }}
                      onClick={() => handleDeleteImage(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "400px" }}>
            {url.map((imageUrl, index) => (
              <img
                key={index}
                style={{
                  width: 100,
                  height: 100,
                  margin: "5px",
                  cursor: "pointer",
                }}
                src={imageUrl}
                alt={`Uploaded ${index + 1}`}
                onClick={() => handleDeleteImage(index)}
              />
            ))}
          </div>
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
            <button onClick={() => handleDeleteProduct(item?._uuid)}>
              DELETE
            </button>
            <button onClick={handleEdit}>{state ? "Cancel" : "Edit"}</button>

            {state && <div>EDIT MODE</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
