/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { endpoint } from './endpoint';
import { Country, ICountries } from './intefaces';

import Card from '../../components/Card';

function Countries() {
  const [countriesObj, setCountriesObj] = useState<ICountries>({});
  let countryCards: React.ReactNode[] = [];

  useEffect(() => {
    async function fetchCountries() {
      const data = await fetch(endpoint);
      const json = await data.json();
      const countriesObj = makeCountriesObject(json);
      setCountriesObj(countriesObj);
      return countriesObj;
    }
    fetchCountries();
  }, []);

  function makeCountriesObject(arrList: [Country]): ICountries {
    let obj = {};

    arrList.map((country: Country) => {
      const ALPHA_3_CODE: string = 'alpha3Code';
      const hasAlphacode: boolean = country.hasOwnProperty(ALPHA_3_CODE);

      if (hasAlphacode) {
        const objKey: string = String(country.alpha3Code).trim();
        const countryObj = {
          [objKey]: {
            alpha3Code: country.alpha3Code,
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
        obj = Object.assign({}, obj, countryObj);
      }
    });
    return obj;
  }

  function generateCards(filter?: string): void {
    countryCards = [];
    for (let key in countriesObj) {
      if (key in countriesObj) {
        const country = countriesObj[key];
        countryCards.push(
          <Card
            key={country.alpha3Code}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      }
    }
  }

  generateCards();

  return <div>{countryCards}</div>;
}

export default Countries;
