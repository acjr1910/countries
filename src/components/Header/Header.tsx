import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (setTheme) {
      const toggle = theme == 'light' ? 'dark' : 'light';
      setTheme(toggle);
    }
  }

  return (
    <div>
      <div>Header;</div>
      <div onClick={toggleTheme}>change theme</div>
    </div>
  );
}

export default Header;
