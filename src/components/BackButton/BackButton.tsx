import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft as leftArrowIcon } from '@fortawesome/free-solid-svg-icons';

import { StyledLink } from './BackButton.styles';

type Props = {
  className: string;
};

function BackButton({ className }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledLink theme={theme} className={className} to="/">
      <FontAwesomeIcon icon={leftArrowIcon} />
      <h4>Back</h4>
    </StyledLink>
  );
}

export default BackButton;
