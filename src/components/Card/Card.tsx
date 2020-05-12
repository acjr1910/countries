import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { StyledLink, CardStyles } from './Card.styles';

interface IProps {
  alpha3Code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

function Card({ alpha3Code, name, population, region, capital, flag }: IProps) {
  const { theme } = useContext(ThemeContext);
  const intlPopulation = new Intl.NumberFormat('en').format(population);

  return (
    <StyledLink to={`details/${alpha3Code}`}>
      <CardStyles theme={theme} className="card">
        <div className="card__flag-container">
          <img className="card__flag-image" alt={`${name} Flag`} src={flag} />
        </div>
        <div className="card__text-container">
          <h4 className="card__name">{name}</h4>
          <p className="card__info">
            <span className="card__info-title">Population:</span>{' '}
            {intlPopulation}
          </p>
          <p className="card__info">
            <span className="card__info-title">Region:</span> {region}
          </p>
          <p className="card__info">
            <span className="card__info-title">Capital:</span> {capital}
          </p>
        </div>
      </CardStyles>
    </StyledLink>
  );
}

export default Card;
