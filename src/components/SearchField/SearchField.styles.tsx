/* eslint-disable eqeqeq */
import styled from 'styled-components';
import {
  colors,
  paddings,
  margins,
  shadows,
  fontSizes,
} from '../../utils/styles/helpers';

export const Container = styled.div`
  margin: ${margins.search};
  display: flex;
  position: relative;
  @media (min-width: 768px) {
    margin: 0;
    max-height: 52px;
    width: 40%;
  }
  .search {
    &__input {
      width: 100%;
      font-size: ${fontSizes.searchInput};
      border: none;
      border-radius: 6px;
      padding: ${paddings.input};
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
      color: ${(props) =>
        props.theme == 'light' ? colors.lightMode.darkGray : colors.white};
      font-weight: 300;
      letter-spacing: 0.02rem;
      box-shadow: ${shadows.search};
      ::-webkit-input-placeholder {
        color: ${(props) =>
          props.theme == 'light' ? colors.lightMode.darkGray : colors.white};
      }
      ::-moz-placeholder {
        color: ${(props) =>
          props.theme == 'light' ? colors.lightMode.darkGray : colors.white};
      }
      ::placeholder {
        color: ${(props) =>
          props.theme == 'light' ? colors.lightMode.darkGray : colors.white};
      }
    }
    &__icon {
      position: absolute;
      top: 50%;
      left: 28px;
      transform: translateY(-50%);
      color: ${(props) =>
        props.theme == 'light' ? colors.lightMode.darkGray : colors.white};
    }
  }
`;
