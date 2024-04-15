import React, { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function Countries({ mode, countries }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setFilteredCountries(countries);
    setIsLoading(true)
  }, [countries, isLoading]);

  const handleSearch = (searchVal, selectedRegion) => {
    // setIsLoading(true);
    
    let filtered = countries;
  
    if (searchVal) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchVal.toLowerCase())
      );
    }
  
    if (selectedRegion) {
      filtered = filtered.filter((country) => country.region === selectedRegion);
    }
  
    // Once filtering is done, update state and stop loading
    setFilteredCountries(filtered);
  };
  

  return (
    <>
      <SearchFilter mode={mode} onClick={handleSearch} />
      <div className={`home-grid ${mode ? "body-lightTheme" : "body-darkTheme"}`}>
        {
         
        filteredCountries?.map((country) => {
          const { name, population, region, capital, flags } = country;
          const { common } = name;

          return (
            <article key={common}>
              <div>
                <Link to={`/countries/${name.common}`}>
                  <img src={flags.png} alt={common}></img>
                </Link>
                <div className="details">
                  <h3>{common}</h3>
                  <h4>
                    Population :<span> {population}</span>
                  </h4>
                  <h4>
                    Region :<span> {region}</span>
                  </h4>
                  <h4>
                    Capital :<span> {capital}</span>
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <LoadingSpinner isLoading={isLoading}/>
    </>
  );
}

export default Countries;
