import { useState } from "react";
import searchImage from "../assets/Search.png";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const [search, setSearch] = useState(false);
  const { onSearch, searchRef } = useSearch();

  const searchInput = () => {
    search === false && setSearch(true);
  };

  const closeSearch = () => {
    search === true && setSearch(false);
  };

  return (
    <div className="search">
      <img src={searchImage} alt="Search" onClick={searchInput} />
      {search && (
        <div className="searchInput">
          <form onSubmit={onSearch}>
            <input type="text" ref={searchRef} />
            <i className="bx bx-x" onClick={closeSearch}></i>
          </form>
        </div>
      )}
      <style>
        {search
          ? `
            .search img{
                display:none
            }
            `
          : ""}
      </style>
    </div>
  );
};

export default Search;
