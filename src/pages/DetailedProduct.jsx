import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import Img1 from '../assets/Search.png' 
import Img2 from '../assets/about-image.png' 
import Img3 from '../assets/background.png' 
import Img4 from '../assets/image 15.png' 
import Img5 from '../assets/product.png' 

const DetailedProduct = () => {
  const { id } = useParams();
  const [imgIndex, setImgIndex] = useState(0)

  const { fetchRequest: detailedProduct, loading } = useFetch({
    url: `https://crudapi.co.uk/api/v1/products/${id}`,
    method: "GET",
  });

  // const someImages = [Img1, Img2, Img3, Img4, Img5]

  console.log(detailedProduct);

  const handleNextImage = () => {
    const nextIndex = (imgIndex + 1) % detailedProduct?.image?.length
    setImgIndex(nextIndex)
  }

  const handlePrevImage = () => {
    const prevIndex = (imgIndex - 1 + detailedProduct?.image?.length) % detailedProduct?.image?.length
    setImgIndex(prevIndex)
  }
  return (
    <div className="detail-product container">
      {loading && <CircularProgress />}
      <div className="product-img">
      <div onClick={handlePrevImage}>Prev</div>
      <img src={detailedProduct?.image[imgIndex]} alt="" />
      <div onClick={handleNextImage}>Next</div>
      </div>
      <div className="detail-product-description">
      <h1>{detailedProduct?.Title}</h1>
      <p>{detailedProduct?.Description}</p>
      </div>
    </div>
  );
};

export default DetailedProduct;
