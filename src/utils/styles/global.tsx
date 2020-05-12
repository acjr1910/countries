import styled from 'styled-components';
import { colors, fontSizes } from './helpers';

export const GlobalStyles = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: ${fontSizes.homepage};
  background: ${(props) =>
    props.theme == 'light'
      ? colors.lightMode.veryLightGray
      : colors.darkMode.veryDarkBlue};
  width: 100%;
`;
