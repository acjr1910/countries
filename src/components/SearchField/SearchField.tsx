import React from 'react';

type Props = {
  searchFieldValue: string;
  setSearchFieldValue: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ searchFieldValue, setSearchFieldValue }: Props) {
  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setSearchFieldValue(value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchFieldValue}
        placeholder="Search for a country"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
