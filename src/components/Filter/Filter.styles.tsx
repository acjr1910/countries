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
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: ${colors.white};
  cursor: pointer;
  font-size: ${fontSizes.filter};
  font-weight: 300;
  :focus {
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: red;
    outline: none;
  }
  ::-ms-expand {
    display: none;
  }
`;
