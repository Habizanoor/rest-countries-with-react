import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Person></Person>
      <Countries></Countries>
      
    </div>
  );
}

/* function LoadCountries(){
  const [countries,setCountries] =useState()
  useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  return(
    <div>
      <h2>trying some by myself now....</h2>
      <p>Available Countries: {countries.length} </p>
      {
        // countries.map(country => <p>{country.name.common}</p>)
        countries.map(country => <Country name={country.name.common} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <p>Country Name: {props.name}</p>
      <p>Capital: {props.capital}</p>
    </div>
  )
} */
export default App;
