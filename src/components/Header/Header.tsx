/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as moonIcon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as solidMoonIcon } from '@fortawesome/free-solid-svg-icons';

import { Styles } from './Header.styles';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const nextTheme = theme == 'light' ? 'dark' : 'light';
  const icon = theme == 'light' ? moonIcon : solidMoonIcon;

  function toggleTheme() {
    if (setTheme) {
      const toggle = nextTheme;
      setTheme(toggle);
    }
  }

  return (
    <Styles theme={theme} className="header">
      <div className="header__flex">
        <h1 className="header__logo">Where in the world?</h1>
      </div>
      <div className="header__theme-switcher" onClick={toggleTheme}>
        <FontAwesomeIcon className="header__theme-icon" size="1x" icon={icon} />
        <h3 className="header__theme-switcher-content">{nextTheme} Mode</h3>
      </div>
    </Styles>
  );
}

export default Header;
