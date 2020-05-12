import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext, ThemeContextProvider } from '../../context/ThemeContext';
import { ICountries } from '../Countries/intefaces';
import Countries from '../Countries';
import CountriesComponent from '../../components/Countries';
import SearchField from '../../components/SearchField';
import Filter from '../../components/Filter';
import Details from '../Details';
import Header from '../../components/Header';

import { GlobalStyles } from '../../utils/styles/global';
import { Main } from './App.styles';

function App() {
  const [countries, setCountries] = useState<ICountries>({});
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [filterByRegionValues, setFilterByRegionValues] = useState<string[]>(
    []
  );
  const [selectedRegion, setSelectedRegion] = useState('');
  const { theme } = useContext(ThemeContext);

  return (
    <GlobalStyles theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/details/:alpha3Code">
            <Details countries={countries} />
          </Route>
          <Route exact path="/">
            <Main className="countries countries__main">
              <SearchField
                searchFieldValue={searchFieldValue}
                setSearchFieldValue={setSearchFieldValue}
              />
              <Filter
                filterByRegionValues={filterByRegionValues}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              />
              <CountriesComponent
                countries={countries}
                searchFieldValue={searchFieldValue}
                selectedRegion={selectedRegion}
              />
            </Main>
          </Route>
        </Switch>
        <Countries
          setFilterByRegionValues={setFilterByRegionValues}
          setCountries={setCountries}
        />
      </Router>
    </GlobalStyles>
  );
}

export default App;
