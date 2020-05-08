/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { colors, shadows, paddings } from '../../utils/styles/helpers';

export const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
  box-shadow: ${shadows.header};
  padding: ${paddings.header};

  .header {
    &__logo {
      font-size: 0.875rem;
      font-weight: 800;
      letter-spacing: 0.02rem;
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
    }
    &__theme-switcher {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    &__theme-icon {
      margin-right: 0.5rem;
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
    }
    &__theme-switcher-content {
      font-size: 0.875rem;
      font-weight: 600;
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
    }
    &__theme-switcher-content::first-letter {
      text-transform: uppercase;
    }
  }
`;
