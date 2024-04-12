import React, { useState } from "react";

function SearchFilter({ mode, onClick }) {
  const [searchVal, setSearchVal] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
    onClick(e.target.value, selectedRegion);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    onClick(searchVal, e.target.value);
  };

  return (
    <div className={`filter ${mode ? "body-lightTheme" : "body-darkTheme"}`}>
      <form className="form-filter" onSubmit={(e) => e.preventDefault()}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={searchVal}
          onChange={handleSearchChange}
        ></input>
      </form>
      <div className="filter-by-region">
        <select className="select" name="select" id="select" onChange={handleRegionChange}>
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;