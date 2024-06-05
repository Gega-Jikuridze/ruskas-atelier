import React, { useRef } from "react";
import useProductRequest from "../../hooks/useRequest";
import ImageUploader from "./imageUploader";

const NewProduct = () => {
  return (
    <div className="container new-product">
      <ImageUploader />
    </div>
  );
};

export default NewProduct;
