import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const useSearch = () => {
  const { fetchRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/products",
    method: "GET",
  });

  const searchRef = useRef(null);
  const navigate = useNavigate();
  const onSearch = (e) => {
    e.preventDefault();

    const searchedItems = fetchRequest?.items.filter((item) => {
      return (
        item.Title.toLowerCase().includes(
          searchRef.current.value.toLowerCase()
        ) ||
        item.Description.toLowerCase().includes(
          searchRef.current.value.toLowerCase()
        )
      );
    });
    console.log(searchedItems);

    navigate("/products");
    if (searchRef.current) return (searchRef.current.value = "");
  };

  return { searchRef, onSearch };
};

export default useSearch;
