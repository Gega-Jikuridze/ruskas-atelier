import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import React, { useEffect, useRef, useState } from "react";
import Search from "./search";

const Header = () => {
  const [category, setCategory] = useState(false);
  const categoryRef = useRef(null);
  const categoryBtnRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      !categoryRef.current.contains(event.target) &&
      !categoryBtnRef.current.contains(event.target)
    ) {
      setCategory(false);
    }
  };

  useEffect(() => {
    if (category === true) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [category]);

  return (
    <header>
      <div className="header container" id="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="nav">
          <Link to="/">მთავარი</Link>
          <Link to="/products">პროდუქცია </Link>
          <Link to="/about">ჩვენ შესახებ</Link>
        </div>

        <Search />
      </div>
    </header>
  );
};

export default Header;
