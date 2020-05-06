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
        <div key={f}>{f}</div>
      ))}
    </div>
  );
}

export default Filter;
