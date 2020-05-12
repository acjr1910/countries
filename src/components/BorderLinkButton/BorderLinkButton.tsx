import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledLink } from './BorderLinkButton.styles';

type Props = {
  label: string;
  linkTo: string;
};

function BorderLinkButton({ label, linkTo }: Props) {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const { theme } = useContext(ThemeContext);
  return (
    <StyledLink theme={theme} to={linkTo} onClick={handleClick}>
      {label}
    </StyledLink>
  );
}

export default BorderLinkButton;
