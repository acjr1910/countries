/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';
import {
  colors,
  shadows,
  paddings,
  letterSpacings,
  fontSizes,
} from '../../utils/styles/helpers';

export const StyledLink = styled(Link)`
  max-width: 75%;
  margin: 2.4rem auto;
  box-shadow: ${shadows.search};
  background: ${(props) =>
    props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-basis: 23%;
    margin: 2.4rem 0.5rem;
  }
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
      @media (min-width: 768px) {
        min-height: 50px;
      }
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
