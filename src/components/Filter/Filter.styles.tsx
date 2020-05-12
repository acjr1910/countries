/* eslint-disable eqeqeq */
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
      transform: translateY(12%);
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

export const DropdownMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 52%;
  position: relative;
  cursor: pointer;

  .dropdown-menu {
    &__active-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border: none;
      border-radius: 6px;
      margin: ${margins.filter};
      padding: ${paddings.filter};
      box-shadow: ${shadows.filter};
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
    }

    &__items-container {
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      z-index: 999;
      top: 3.625rem;
      max-width: 100%;
      color: red;
      background: red;
      border-radius: 6px;
      margin: ${margins.filter};
      padding: ${paddings.filter};
      box-shadow: ${shadows.filter};
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
    }

    &__item {
      width: 100%;
      border: none;
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
      text-align: left;
      font-size: ${fontSizes.filter};
      font-weight: 300;
      margin: 0.4rem 0;
      cursor: pointer;
    }
  }
`;
