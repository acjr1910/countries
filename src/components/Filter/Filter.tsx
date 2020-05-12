/* eslint-disable eqeqeq */
import React, { useState, useContext } from 'react';
import { DropdownMenu } from './Filter.styles';
import { ThemeContext } from '../../context/ThemeContext';

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
  const { theme } = useContext(ThemeContext);
  const [showDropdown, toggleShowDropdown] = useState<boolean>(false);

  function handleDropdownMenu() {
    toggleShowDropdown((prevState) => !prevState);
  }

  function handleDropdownMenuItem(event: React.MouseEvent) {
    let value: string = event.currentTarget.innerHTML;
    if (value == filterByRegionValues[0]) value = '';
    setSelectedRegion(value);
  }

  const dropdownItems: React.ReactNode[] = filterByRegionValues.map((value) => {
    return (
      <button
        key={value}
        className="dropdown-menu__item"
        type="button"
        onClick={handleDropdownMenuItem}
      >
        {value}
      </button>
    );
  });

  const activeItemTextContent: string = selectedRegion || 'Filter By Region';

  return (
    <DropdownMenu
      theme={theme}
      className="dropdown-menu"
      onClick={handleDropdownMenu}
    >
      <div className="dropdown-menu__active-item">
        <h3 className="dropdown-menu__active-text">{activeItemTextContent}</h3>
        <FontAwesomeIcon className="dropdown-menu__icon" icon={angleDownIcon} />
      </div>
      {showDropdown && (
        <div className="dropdown-menu__items-container">{dropdownItems}</div>
      )}
    </DropdownMenu>
  );
}

export default Filter;
