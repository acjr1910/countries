import React, { useState } from 'react';
import { ICountries } from '../Countries/intefaces';
import Countries from '../Countries';
import SearchField from '../../components/SearchField';
import Filter from '../../components/Filter';

function App() {
  const [countries, setCountries] = useState<ICountries>({});
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [filterByRegionValues, setFilterByRegionValues] = useState<string[]>(
    []
  );
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <div className="countries countries__app">
      <h1>REST Countries</h1>
      <SearchField
        searchFieldValue={searchFieldValue}
        setSearchFieldValue={setSearchFieldValue}
      />
      <Filter
        filterByRegionValues={filterByRegionValues}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <Countries
        countries={countries}
        setCountries={setCountries}
        searchFieldValue={searchFieldValue}
        selectedRegion={selectedRegion}
        setFilterByRegionValues={setFilterByRegionValues}
      />
    </div>
  );
}

export default App;
