import { useState } from "react";
import searchImage from "../assets/Search.png";

const Search = () => {
  const [search, setSearch] = useState(false);

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
          <form>
            <input type="text" />
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
