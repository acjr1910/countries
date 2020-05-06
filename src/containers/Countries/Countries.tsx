/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { endpoint } from './endpoint';
import { Country } from './types';
import { ICountries } from './intefaces';

import Card from '../../components/Card';

type Props = {
  countries: ICountries;
  setCountries: React.Dispatch<React.SetStateAction<ICountries>>;
  searchFieldValue: string;
  setFilterByRegionValues: React.Dispatch<React.SetStateAction<string[]>>;
};

function Countries({
  countries,
  setCountries,
  searchFieldValue,
  setFilterByRegionValues,
}: Props) {
  const [fetchHasFailed, setFetchHasFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let countryCards: React.ReactNode[] = [];
  let regionFilterValues: string[] = [];

  useEffect(() => {
    async function fetchCountries() {
      let countries;
      setIsLoading(true);
      try {
        const data = await fetch(endpoint);
        const json = await data.json();
        countries = makeCountriesObject(json);
        setIsLoading(false);
        setCountries(countries);
        setFilterByRegionValues(['Americas', 'Asia']); // make dynamic
      } catch (error) {
        setIsLoading(false);
        setFetchHasFailed(true);
      }
      return countries;
    }
    fetchCountries();
  }, [setCountries, setFilterByRegionValues]);

  function pushRegionFilterValue(region: string) {
    console.log(region);
    regionFilterValues.push(region);
  }

  function makeFiltersArray() {
    // CREATE THIS FN TO generate each filter key;
  }

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

  function generateCards(search: string): void {
    countryCards = [];
    const regex = new RegExp(`^${search}`, 'i');

    function pushCountry(arr: React.ReactNode[], country: any): void {
      arr.push(
        <Card
          key={country.alpha3Code}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      );
    }

    for (let key in countries) {
      if (key in countries) {
        const country = countries[key];
        if (search) {
          if (regex.test(country.name)) {
            pushCountry(countryCards, country);
          }
        } else {
          pushCountry(countryCards, country);
        }
      }
    }
  }

  if (isLoading) return <div>Loading</div>; // add spinner here

  if (fetchHasFailed)
    return (
      <div>
        Oops, something went wrong. Please refresh the page or try again later.
      </div>
    );

  generateCards(searchFieldValue);

  return <div className="countries__cards-container">{countryCards}</div>;
}

export default Countries;
