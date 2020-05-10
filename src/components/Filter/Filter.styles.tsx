import styled from 'styled-components';
import {
  colors,
  margins,
  paddings,
  shadows,
  fontSizes,
} from '../../utils/styles/helpers';

export const Select = styled.select`
  position: relative;
  width: 53%;
  border: none;
  border-radius: 6px;
  margin: ${margins.filter};
  padding: ${paddings.filter};
  box-shadow: ${shadows.filter};
  background: ${colors.white};
  cursor: pointer;
  font-size: ${fontSizes.filter};
  font-weight: 300;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  :focus {
    color: ${colors.black};
    outline: none;
  }
  ::-ms-expand {
    display: none;
  }
`;
