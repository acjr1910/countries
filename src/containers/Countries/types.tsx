export type Currency = {
  name: string;
};

export type Languages = {
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
  topLevelDomain: string[];
  currencies: [Currency];
  languages: Languages[];
  borders: string[];
};
