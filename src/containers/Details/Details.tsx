/* eslint-disable eqeqeq */
import React, { useContext, useEffect } from 'react';
import { ICountries } from '../Countries/intefaces';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

import BackButton from '../../components/BackButton';
import BorderLinkButton from '../../components/BorderLinkButton';

import { Styles } from './Details.styles';
import { Currency } from '../Countries/types';

type Props = {
  countries: ICountries;
};

function Details({ countries }: Props): JSX.Element {
  const { theme } = useContext(ThemeContext);
  let { alpha3Code } = useParams();
  const country = countries[alpha3Code];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  if (!country) return <></>;

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  const intlPopulation = new Intl.NumberFormat('en').format(population);
  const hasBorders = borders.length > 0;

  function arrayToString(arr: Currency[]): string {
    let newString: string = '';

    arr.map((item) => {
      return (newString =
        newString == '' ? `${item.name}` : `${newString}, ${item.name}`);
    });

    return newString;
  }

  return (
    <Styles theme={theme} className="detail-page">
      <div className="detail-page__back-button-container">
        <BackButton className="detail-page__back-button" />
      </div>
      <div className="detail-page__flag-container">
        <img
          className="detail-page__flag-image"
          src={flag}
          alt={`${name} Flag`}
        />
      </div>
      <div className="detail-page__info-container">
        <div className="detail-page__name-container">
          <h2 className="detail-page__name">{name}</h2>
        </div>
        <div className="detail-page__top-container">
          <p className="detail-page__info">
            <span className="detail-page__info-title">Native Name:</span>{' '}
            {nativeName}
          </p>
          <p className="detail-page__info">
            <span className="detail-page__info-title">Population: </span>{' '}
            {intlPopulation}
          </p>
          <p className="detail-page__info">
            <span className="detail-page__info-title">Region: </span> {region}
          </p>
          <p className="detail-page__info">
            <span className="detail-page__info-title">Sub Region: </span>{' '}
            {subregion}
          </p>
          <p className="detail-page__info">
            <span className="detail-page__info-title">Capital: </span> {capital}
          </p>
        </div>
        <div className="detail-page__mid-container">
          <p className="detail-page__info">
            <span className="detail-page__info-title">Top Level Domain: </span>{' '}
            {topLevelDomain}
          </p>
          <p className="detail-page__info">
            <span className="detail-page__info-title">Currencies: </span>{' '}
            {arrayToString(currencies)}
          </p>
          <p className="detail-page__info">
            <span className="detail-page__info-title">Languages: </span>{' '}
            {arrayToString(languages)}
          </p>
        </div>
        {hasBorders && (
          <div className="detail-page__bottom-container">
            <h4 className="detail-page__border-title">Border Countries:</h4>
            {borders.map((border) => {
              const countryBorderName = countries[border].name;
              return (
                <BorderLinkButton
                  key={border}
                  label={countryBorderName}
                  linkTo={border}
                />
              );
            })}
          </div>
        )}
      </div>
    </Styles>
  );
}

export default Details;
