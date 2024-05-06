import React, { useRef } from "react";
import useProductRequest from "../../hooks/useRequest";

const NewProduct = () => {
  const selectedValueRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const { loading, sendRequest } = useProductRequest({
    url: "https://crudapi.co.uk/api/v1/products",
    method: "POST",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      Category: selectedValueRef.current.value,
      Title: titleRef.current.value,
      Description: descriptionRef.current.value,
      image:
        "https://i.pinimg.com/736x/74/85/10/748510c7ab9c474155dd511164e9252e.jpg",
    };

    sendRequest([newProduct]);
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="product title" ref={titleRef} />
        <input
          type="text"
          placeholder="prodcut description"
          ref={descriptionRef}
        />
        <select id="Category" ref={selectedValueRef}>
          <option value="">აირჩიე კატეგორია</option>
          <option value="woman">ქალი</option>
          <option value="man">კაცი</option>
          <option value="kid">ბავშვი</option>
          <option value="charch">საეკლესიო</option>
          <option value="national">ნაციონალური</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
