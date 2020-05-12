/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';
import { colors, margins, paddings, shadows } from '../../utils/styles/helpers';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${rem('108px')};
  padding: ${paddings.backButton};
  box-shadow: ${shadows.backButton};
  margin: ${margins.backButton};
  background: ${(props) =>
    props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
  color: ${(props) => (props.theme == 'light' ? colors.black : colors.white)};
`;
