import React from "react";
import searchIcon from "../../assets/search-icon.png";
import "./style.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search here"
        value={value}
        onChange={onChange}
        className="truck-search-input"
      />
      <img src={searchIcon} alt="Search" className="search-icon" />
    </div>
  );
};

export default SearchBar;
