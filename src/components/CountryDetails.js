import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../countryDetails.css'

function CountryDetails({mode}) {
  const [country, setCountry] = useState();
  const { name } = useParams();
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const fetchCountryData = async () => {
      const res = await fetch(url);
      const countryData = await res.json();
      setCountry(countryData);
      // console.log(countryData);
    };
    fetchCountryData();
  }, [name]);
console.log(country);
  return (
    <>
      <div className={`country-details ${mode?'body-lightTheme':'body-darkTheme'}`} >
        <button className="btn"  >
          <Link to="/" className="mode-icon" >
            <i className="fa-solid fa-arrow-left-long"></i>
            <h3>Back</h3>
          </Link>
        </button>
        {country?.map((data) => {
          const {
            name,
            population,
            capital,
            region,
            subregion,
            flags,
            languages,
            borders,
            currencies,
          } = data;
          const { common, nativeName } = name;
          const { eng } = nativeName;
          const {official} = eng;
          // const {symbol} = currencies[0]
          
          // console.log(currencies[0].name);
          const cur = currencies[Object.keys(currencies)[0]].name
          // console.log(cur);
          return (
            
            <section className="country"  key={common}>
              <div className="flag-img">
                <img src={flags.png} alt={common}></img>
              </div>
              <div className="details">
                <h1>{common}</h1>
                <h4>
                  NativeName :<span> {official}</span>
                </h4>
                <h4>
                  Population :<span> {population}</span>
                </h4>
                <h4>
                  Region :<span> {region}</span>
                </h4>
                <h4>
                  Sub-Region :<span> {subregion}</span>
                </h4>
                <h4>
                  Capital :<span> {capital}</span>
                </h4>
                    </div>
                <div>
                  <h4>
                    Top Level Domain :<span> </span>
                  </h4>

                  <h4>
                    Currencies :
                    <span>{cur}</span>
                  </h4>

                  <h4>
                    Languages :
                    {Object.keys(languages)?.map((k) => {
                      return <span key={k}> {languages[k]}</span>;
                    })}
                  </h4>
                </div> 
                <div className="borders-details" >
                {borders && 
                  <h3>
                    Border Countries :
                    {Object.keys(borders)?.map((k) => {
                      return <span key={k}> {borders[k]}</span>;
                    })}
                  </h3>
                }
              </div>
                
            </section>
            
          );
          
        })}
        
      </div>
    </>
  );
}

export default CountryDetails;
