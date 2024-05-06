import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { CircularProgress } from "@mui/material";

const DetailedProduct = () => {
  const { id } = useParams();

  const { fetchRequest: detailedProduct, loading } = useFetch({
    url: `https://crudapi.co.uk/api/v1/products/${id}`,
    method: "GET",
  });

  console.log(detailedProduct);

  return (
    <div className="detail-product container">
      {loading && <CircularProgress />}
      <img src={detailedProduct?.image} alt="" />
      <div className="detail-product-description">
      <h1>{detailedProduct?.Title}</h1>
      <p>{detailedProduct?.Description}</p>
      </div>
    </div>
  );
};

export default DetailedProduct;
