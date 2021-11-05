import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList(props) {
  console.log("=======",props)

  const countries = props.data;

  return (
    <>
      <h1>Country List</h1>
      <ul>
        {countries.map((country, i) => {
          return (
            <>
              <Link to={"/country/" + country.cca3}>
                <span>{country.flag}</span>
                <li>{country.name.common}</li>
              </Link>
            </>

          );
        })}
      </ul>
    </>
  );
}
