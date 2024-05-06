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
    <div>
      {loading && <CircularProgress />}
      <h1>{detailedProduct?.Title}</h1>
      <h1>{detailedProduct?.Description}</h1>
      <img src={detailedProduct?.image} alt="" />
      <h2>{detailedProduct?.Category}</h2>
    </div>
  );
};

export default DetailedProduct;
