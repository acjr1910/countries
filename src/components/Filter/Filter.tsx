/* eslint-disable eqeqeq */
import React from 'react';
import { Wrapper } from './Filter.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown as angleDownIcon } from '@fortawesome/free-solid-svg-icons';

type Props = {
  filterByRegionValues: string[];
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
};

function Filter({
  filterByRegionValues,
  selectedRegion,
  setSelectedRegion,
}: Props) {
  function handleChange(event: React.FormEvent<HTMLSelectElement>) {
    const value = event.currentTarget.value;
    setSelectedRegion(value);
  }

  return (
    <Wrapper className="filter">
      <FontAwesomeIcon className="filter__icon" icon={angleDownIcon} />
      <select
        className="filter__select"
        value={selectedRegion}
        onChange={handleChange}
      >
        {filterByRegionValues.map((value, index) => {
          const optionValue = index == 0 ? '' : value;
          return (
            <option className="filter__option" key={value} value={optionValue}>
              {value}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
}

export default Filter;
