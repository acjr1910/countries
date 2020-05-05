/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';

type Currency = {
  name: string;
};

type Languages = {
  name: string;
};
interface ICountry {
  alpha3Code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: [string];
  currencies: [Currency];
  languages: [Languages];
  borders: [string];
}

function Countries() {
  const [countryList, setCountryList] = useState([]);
  const [countryObj, setCountryObj] = useState({});

  useEffect(() => {
    async function getCountryList() {
      const data = await fetch(`https://restcountries.eu/rest/v2/all`);
      const json = await data.json();
      setCountryList(json);
      return json;
    }
    getCountryList();
  }, []);

  console.log(countryList);

  function makeCountriesObject() {
    let obj = {};

    countryList.map(function (country: ICountry): void {
      const ALPHA_3_CODE: string = 'alpha3Code';
      const hasAlphacode: boolean = country.hasOwnProperty(ALPHA_3_CODE);

      if (hasAlphacode) {
        const objKey: string = String(country.alpha3Code).trim();
        const objProps = {
          [objKey]: {
            name: country.name,
            population: country.population,
            region: country.region,
            capital: country.capital,
            nativeName: country.nativeName,
            subregion: country.subregion,
            topLevelDomain: country.topLevelDomain,
            currencies: country.currencies,
            languages: country.languages,
            borders: country.languages,
          },
        };
        obj = Object.assign({}, obj, objProps);
      }
    });
    console.log('object', obj);
  }

  makeCountriesObject();

  return <div>Countries</div>;
}

export default Countries;
