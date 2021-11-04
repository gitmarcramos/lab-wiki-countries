import React from 'react';
import { NavLink } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList(props) {
  const countries = props.data;

  return (
    <>
      <h1>Country List</h1>
      <ul>
        {countries.map((country, i) => {
          return (
            <>
              <NavLink to={"/country/" + country.cca3} key={i}>
                <span>{country.flag}</span>
                <li>{country.name.common}</li>
              </NavLink>
            </>
          );
        })}
      </ul>
    </>
  );
}
