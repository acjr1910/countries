import React from 'react';

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
  return (
    <div>
      {filterByRegionValues.map((f) => (
        <div>{f}</div>
      ))}
    </div>
  );
}

export default Filter;
