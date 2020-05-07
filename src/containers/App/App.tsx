import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ICountries } from '../Countries/intefaces';
import Countries from '../Countries';
import SearchField from '../../components/SearchField';
import Filter from '../../components/Filter';
import Details from '../Details';

function App() {
  const [countries, setCountries] = useState<ICountries>({});
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [filterByRegionValues, setFilterByRegionValues] = useState<string[]>(
    []
  );
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <Router>
      <h1>Countries Header comes here</h1>
      <Switch>
        <Route exact path="/details/:alpha3Code">
          <Details countries={countries} />
        </Route>
        <Route exact path="/">
          <div className="countries countries__app">
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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
