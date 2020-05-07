import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  alpha3Code: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

function Card({ alpha3Code, name, population, region, capital, flag }: IProps) {
  return (
    <Link to={`details/${alpha3Code}`}>
      <div data-testid="country-card">
        <p>{name}</p>
        <p>{population}</p>
        <p>{region}</p>
        <p>{capital}</p>
        <p>{flag}</p>
        <p>------------</p>
      </div>
    </Link>
  );
}

export default Card;
