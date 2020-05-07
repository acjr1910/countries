import React from 'react';
import { ICountries } from '../../containers/Countries/intefaces';
import { Country } from '../../containers/Countries/types';

import Card from '../Card';

type Props = {
  searchFieldValue: string;
  selectedRegion: string;
  countries: ICountries;
};

function Countries({ countries, searchFieldValue, selectedRegion }: Props) {
  function makeCountriesToBeRendered(): React.ReactNode[] {
    const regex = new RegExp(`^${searchFieldValue}`, 'i');
    let cardsToRender: JSX.Element[] = [];

    function addCountry(country: Country): void {
      if (selectedRegion && selectedRegion !== country.region) {
        return;
      }
      const card = (
        <Card
          key={country.alpha3Code}
          alpha3Code={country.alpha3Code}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
        />
      );
      cardsToRender.push(card);
    }

    for (let key in countries) {
      if (key in countries) {
        let country = countries[key];

        if (searchFieldValue) {
          if (regex.test(country.name)) {
            addCountry(country);
          }
        } else {
          addCountry(country);
        }
      }
    }
    return cardsToRender;
  }

  const cardToRender = makeCountriesToBeRendered();

  return (
    <div>
      <div>CountriesComponent</div>
      <div>{cardToRender}</div>
    </div>
  );
}

export default Countries;
