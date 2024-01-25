import {React} from "react";
import SearchFilter from "./SearchFilter";
import { Link } from "react-router-dom";

function Countries({mode, countries}) {
  return (
    <>
    <SearchFilter mode={mode} countries={countries}/>
    <div className={`home-grid ${mode?'body-lightTheme':'body-darkTheme'}`}>
      
      {countries?.map((country) => {
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
                <h4>Population :
                  <span> {population}</span>
                </h4>
                <h4>Region :
                  <span> {region}</span>
                </h4>
                <h4>Capital :
                  <span> {capital}</span>
                </h4>
              </div>
            </div>
          </article>
        );
      })}
    </div>
    </>
  );
}

export default Countries;
