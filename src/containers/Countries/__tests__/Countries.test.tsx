import React, { Dispatch } from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';

import { ICountries } from '../intefaces';
import { endpoint } from '../endpoint';
import Countries from '../Countries';

// const data = [
//   {
//     alpha3Code: 'AFG',
//     name: 'Afghanistan',
//     population: 27657145,
//     region: 'Asia',
//     capital: 'Kabul',
//     nativeName: 'افغانستان',
//     subregion: 'Southern Asia',
//     topLevelDomain: ['.af'],
//     currencies: [{ name: 'Afghan afghani' }],
//     languages: [
//       { name: 'Pashto' },
//       {
//         name: 'Uzbek',
//       },
//       {
//         name: 'Turkmen',
//       },
//     ],
//     borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
//   },
// ];

describe('<Countries />', () => {
  const fetchMock = require('fetch-mock-jest');

  afterEach(() => {
    cleanup();
    fetchMock.restore();
    fetchMock.reset();
  });

  it('fetch data success', async () => {
    await fetchMock.mock(endpoint, 200);

    const res = await fetch(endpoint);
    const successStatus = res.status > 199 && res.status < 300;
    expect(fetchMock).toHaveBeenCalledWith(
      `https://restcountries.eu/rest/v2/all`
    );
    expect(successStatus).toBe(true);
  });

  it('fetch data error', async () => {
    await fetchMock.mock(endpoint, 400);

    const res = await fetch(endpoint);
    const failStatus = res.status > 399 && res.status < 501;
    expect(fetchMock).toHaveBeenCalledWith(
      `https://restcountries.eu/rest/v2/all`
    );
    expect(failStatus).toBe(true);
  });
});
