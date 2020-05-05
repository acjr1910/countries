import React, { useState, useEffect } from 'react';

function Countries() {
  const [countryList, setCountryList] = useState([]);
  const [countryObj, setCountryObj] = useState({});

  useEffect(() => {
    async function getCountries() {
      const data = await fetch(`https://restcountries.eu/rest/v2/all`);
      const json = await data.json();
      setCountryList(json);
      return json;
    }
    getCountries();
  }, []);

  console.log(countryList);

  function makeCountriesObject() {
    var obj = {};
    countryList.map(function (country: {
      name: string;
      subregion: string;
    }): void {
      const s = String(country.name).trim();
      var newObject = {
        [s]: {
          name: country.name,
          subregion: country.subregion,
        },
      };
      obj = Object.assign({}, obj, newObject);
    });
    console.log(obj);
    var arr = Object.keys(obj);
    console.log(arr);
    return obj;
  }

  makeCountriesObject();

  return <div>Countries</div>;
}

export default Countries;
