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
  selectedRegion: string;
  setFilterByRegionValues: React.Dispatch<React.SetStateAction<string[]>>;
};

function Countries({
  countries,
  setCountries,
  searchFieldValue,
  selectedRegion,
  setFilterByRegionValues,
}: Props) {
  const [fetchHasFailed, setFetchHasFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let countryCards: React.ReactNode[] = [];

  useEffect(() => {
    async function fetchCountries() {
      let countries;
      let regions: string[] = [];

      setIsLoading(true);
      try {
        const data = await fetch(endpoint);
        const json = await data.json();
        countries = makeCountriesObject(json);
        regions = makeRegionsArray(countries);
        setIsLoading(false);
        setCountries(countries);
        setFilterByRegionValues(regions);
      } catch (error) {
        setIsLoading(false);
        setFetchHasFailed(true);
      }
      return countries;
    }
    fetchCountries();
  }, [setCountries, setFilterByRegionValues]);

  function makeRegionsArray(countries: ICountries): string[] {
    let cache: { [key: string]: string } = {
      ['Filter by Region']: '',
    };

    for (let key in countries) {
      const region = countries[key].region;
      if (region && !cache[region]) {
        cache[region] = region;
      }
    }
    const regionsArray: string[] = Object.keys(cache);
    return regionsArray;
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

  function generateCards(search: string, region: string): void {
    countryCards = [];
    const regex = new RegExp(`^${search}`, 'i');

    function pushCountry(arr: React.ReactNode[], country: Country): void {
      if (selectedRegion && selectedRegion !== country.region) {
        return;
      }
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
        let country = countries[key];

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
        <h1>Oops, something went wrong.</h1>
        <h2>Please refresh the page or try again later.</h2>
      </div>
    );

  generateCards(searchFieldValue, selectedRegion);

  return <div className="countries__cards-container">{countryCards}</div>;
}

export default Countries;
