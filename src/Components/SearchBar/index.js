import React, { useState } from "react";

import "./styles.css";

const SearchBar = ({ searchPress }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (e.target.value === "") searchPress(e.target.value);
  };

  const handleSubmit = () => {
    searchPress(searchInput);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          value={searchInput}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className="searchButton" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
