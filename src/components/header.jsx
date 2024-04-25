import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import React, { useEffect, useRef, useState } from "react";
import Search from "./search";

const nav = ["ნაციონალური", "ქალი", "კაცი", "ბავშვი", "საეკლესიო"];

const Header = () => {
  const [category, setCategory] = useState(false);
  const categoryRef = useRef(null);
  const categoryBtnRef = useRef(null);

  const categoryClick = () => {
    setCategory((category) => !category);
  };

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
          <Link to="/products" ref={categoryBtnRef} onClick={categoryClick}>
             პროდუქცია
          </Link>
          {category && !categoryRef.current && (
            <div ref={categoryRef} className="header-category">
              {nav.map((el, index) => (
                <h1 key={index}>
                  {el} <i className="bx bx-chevron-right"></i>
                </h1>
              ))}
            </div>
          )}
          <Link to="/about">ჩვენ შესახებ</Link>
        </div>

        <Search />
      </div>
    </header>
  );
};

export default Header;
