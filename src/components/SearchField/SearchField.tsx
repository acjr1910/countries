import React, { useContext } from 'react';
import { Container } from './SearchField.styles';
import { ThemeContext } from '../../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as searchIcon } from '@fortawesome/free-solid-svg-icons';

type Props = {
  searchFieldValue: string;
  setSearchFieldValue: React.Dispatch<React.SetStateAction<string>>;
};

function Search({ searchFieldValue, setSearchFieldValue }: Props) {
  const { theme } = useContext(ThemeContext);

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setSearchFieldValue(value);
  }

  return (
    <Container theme={theme} className="search">
      <FontAwesomeIcon className="search__icon" icon={searchIcon} />
      <input
        type="text"
        value={searchFieldValue}
        placeholder="Search for a country..."
        onChange={handleChange}
        className="search__input"
      />
    </Container>
  );
}

export default Search;
