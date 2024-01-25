import { useState } from "react";

function SearchFilter({ mode, countries, onClick }) {

  const [searchVal, setSearchVal] = useState("");
  return (
    <div className={`filter ${mode ? "body-lightTheme" : "body-darkTheme"}`}>
      <form className="form-filter" onSubmit={(e)=> e.preventDefault()}>
        <i className="fa-solid fa-magnifying-glass" ></i>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={(e) => setSearchVal(e.target.value)}
        ></input>
      </form>
      <div className="select-filter">
        <select className="select" name="select" id="select">
          <option value="Filter by region">Filter by region</option>
          <option value="Aftica">Aftica</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
