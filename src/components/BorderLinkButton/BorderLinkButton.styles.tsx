/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/styles/helpers';
import { rem } from 'polished';

export const StyledLink = styled(Link)`
  padding: 0.5rem 1.5rem;
  text-align: center;
  margin: 0.2rem 0.2rem;
  box-shadow: 0px 1px 8px -2px rgba(0, 0, 0, 0.3);
  font-size: 12px;
  max-height: ${rem('35px')};
  background: ${(props) =>
    props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
`;
