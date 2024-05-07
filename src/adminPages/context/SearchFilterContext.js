import React, { createContext, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const { fetchRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/products",
    method: "GET",
  });

  const [searchedData, setSearchedData] = useState(fetchRequest);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [checkboxValues, setCheckboxValues] = useState({
    woman: false,
    man: false,
    kid: false,
    charch: false,
    national: false,
  });

  const newProducts = fetchRequest?.items.map((product) => ({
    title: product.Title,
    description: product.Description,
    category: product.Category,
    image: product.image,
    id: product._uuid,
  }));

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [id]: checked,
    }));
  };

  const filteredProducts = newProducts?.filter((product) => {
    if (
      !checkboxValues.woman &&
      !checkboxValues.man &&
      !checkboxValues.kid &&
      !checkboxValues.charch &&
      !checkboxValues.national
    ) {
      return true;
    }

    return (
      (checkboxValues.woman && product.category === "woman") ||
      (checkboxValues.man && product.category === "man") ||
      (checkboxValues.kid && product.category === "kid") ||
      (checkboxValues.charch && product.category === "charch") ||
      (checkboxValues.national && product.category === "national")
    );
  });

  const onSearch = (e) => {
    e.preventDefault();

    const searchedItems = newProducts?.filter((item) => {
      return (
        item.title
          .toLowerCase()
          .includes(searchRef.current.value.toLowerCase()) ||
        item.category
          .toLowerCase()
          .includes(searchRef.current.value.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(searchRef.current.value.toLowerCase())
      );
    });

    setSearchedData(searchedItems);

    navigate("/products");
    if (searchRef.current) return (searchRef.current.value = "");
  };

  const displayProducts =
    searchedData?.length > 0 ? searchedData : filteredProducts;

  return (
    <SearchContext.Provider
      value={{
        onSearch,
        searchRef,
        displayProducts,
        handleCheckboxChange,
        checkboxValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
