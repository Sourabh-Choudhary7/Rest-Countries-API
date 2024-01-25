
import './index.css'
import Countries from './components/Countries'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from "react";

function App() {
  const url = "https://restcountries.com/v3.1/all";
  const [isDarkMode, setisDarkMode] = useState(false);
  // console.log(isDarkMode);
  const [countries, setCountries] = useState();
  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(url);
      const countries = await res.json();
      setCountries(countries);
      // console.log(countries);
    };
    fetchCountry();
  }, []);
  return (
      <Router>
    <div className="App">
      <Navbar mode={isDarkMode} changeTheme={setisDarkMode} />
      <Routes>
      <Route path='/'  element={<Countries mode={isDarkMode} countries={countries} changeTheme={setisDarkMode}/>}/>
      <Route path='/countries/:name'  element={<CountryDetails mode={isDarkMode} changeTheme={setisDarkMode}/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
