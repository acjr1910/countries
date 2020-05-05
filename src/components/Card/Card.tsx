import React from 'react';

interface IProps {
  name: string;
  population: number;
  region: string;
  capital: string;
}

function Card({ name, population, region, capital }: IProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
      <p>------------</p>
    </div>
  );
}

export default Card;
