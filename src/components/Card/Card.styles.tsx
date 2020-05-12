/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { rem } from 'polished';
import {
  colors,
  shadows,
  paddings,
  letterSpacings,
  fontSizes,
} from '../../utils/styles/helpers';

export const Styles = styled.div`
  max-width: 75%;
  margin: 2.4rem auto;
  box-shadow: ${shadows.search};
  .card {
    &__flag-container {
      display: flex;
    }
    &__flag-image {
      border-radius: ${rem('5px')} ${rem('5px')} 0 0;
    }

    &__text-container {
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
      border-radius: 0 0 ${rem('5px')} ${rem('5px')};
      padding: ${paddings.card.textContainer};
    }
    &__name {
      font-size: ${fontSizes.card.infoTitle};
      letter-spacing: ${letterSpacings.extraSmall};
      font-weight: 800;
      margin-bottom: 0.8rem;
    }
    &__info {
      margin: 0.4rem 0;
      letter-spacing: ${letterSpacings.extraSmall};
    }
    &__info-title {
      font-weight: 600;
      letter-spacing: ${letterSpacings.extraSmall};
    }
  }
`;
