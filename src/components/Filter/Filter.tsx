/* eslint-disable eqeqeq */
import React from 'react';
import { Select } from './Filter.styles';

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
    <Select className="filter" value={selectedRegion} onChange={handleChange}>
      {filterByRegionValues.map((value, index) => {
        const optionValue = index == 0 ? '' : value;
        return (
          <option className="filter__option" key={value} value={optionValue}>
            {value}
          </option>
        );
      })}
    </Select>
  );
}

export default Filter;
