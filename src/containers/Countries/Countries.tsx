/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { endpoint } from './endpoint';
import { Country } from './types';
import { ICountries } from './intefaces';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

type Props = {
  setCountries: React.Dispatch<React.SetStateAction<ICountries>>;
  setFilterByRegionValues: React.Dispatch<React.SetStateAction<string[]>>;
};

function Countries({ setCountries, setFilterByRegionValues }: Props) {
  const [fetchHasFailed, setFetchHasFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      return () => {};
    }
    fetchCountries();
  }, [setCountries, setFilterByRegionValues]);

  function makeRegionsArray(countries: ICountries): string[] {
    let cache: { [key: string]: string } = {
      // eslint-disable-next-line no-useless-computed-key
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
            borders: country.borders,
            flag: country.flag,
          },
        };

        obj = Object.assign({}, obj, countryObj);
      }
    });
    return obj;
  }

  if (isLoading)
    return (
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Loader
          type="RevolvingDot"
          color="#888"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );

  if (fetchHasFailed)
    return (
      <div>
        <h1>Oops, something went wrong.</h1>
        <h2>Please refresh the page or try again later.</h2>
      </div>
    );
  return null;
}

export default Countries;
