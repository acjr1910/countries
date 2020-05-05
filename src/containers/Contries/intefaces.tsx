type Currency = {
  name: string;
};

type Languages = {
  name: string;
};

export type Filter = {};

export type Country = {
  alpha3Code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: [string];
  currencies: [Currency];
  languages: [Languages];
  borders: [string];
};

export type ICountries = {
  [key: string]: Country;
};
