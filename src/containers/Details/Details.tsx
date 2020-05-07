import React from 'react';
import { ICountries } from '../Countries/intefaces';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton';
import BorderLinkButton from '../../components/BorderLinkButton';

type Props = {
  countries: ICountries;
};

function Details({ countries }: Props): JSX.Element {
  let { alpha3Code } = useParams();
  const country = countries[alpha3Code];

  return (
    <div>
      <BackButton />
      <div>Details Page</div>
      {country.borders.map((border) => {
        const countryBorderName = countries[border].name;
        return (
          <div>
            <BorderLinkButton label={countryBorderName} linkTo={border} />
          </div>
        );
      })}
    </div>
  );
}

export default Details;
