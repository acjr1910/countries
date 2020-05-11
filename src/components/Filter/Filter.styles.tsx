import styled from 'styled-components';
import {
  colors,
  margins,
  paddings,
  shadows,
  fontSizes,
} from '../../utils/styles/helpers';

export const Wrapper = styled.div`
  position: relative;
  max-width: 45%;

  .filter {
    &__icon {
      position: absolute;
      z-index: 999;
      right: 11px;
      top: 25%;
      transform: translateY(0%);
    }

    &__select {
      position: relative;
      width: 100%;
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
    }
  }
`;
