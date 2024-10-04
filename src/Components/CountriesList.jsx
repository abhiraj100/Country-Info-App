/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

const CountriesList = ({ query }) => {
  let [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  // if(countriesData.length === 0){
  //   return <CountriesListShimmer />
  // }

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                />
              );
            })}
          ;
        </div>
      )}
    </>
  );
};

export default CountriesList;
