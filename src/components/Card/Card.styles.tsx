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
  transition,
} from '../../utils/styles/helpers';

interface CardProps {
  readonly theme: string;
  readonly flag: string;
}

export const CardStyles = styled.div<CardProps>`
  background: ${(props) =>
    props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};

  .card {
    &__flag-container {
      width: 280px;
      height: 186px;
      border-radius: ${rem('5px')} ${rem('5px')} 0 0;
      background-image: url(${(props) => props.flag});
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
    }

    &__flag-image {
      display: none;
      border-radius: ${rem('5px')} ${rem('5px')} 0 0;
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
    }

    &__text-container {
      min-width: 280px;
      background: ${(props) =>
        props.theme == 'light' ? colors.white : colors.darkMode.darkBlue};
      color: ${(props) =>
        props.theme == 'light' ? colors.black : colors.white};
      border-radius: 0 0 ${rem('5px')} ${rem('5px')};
      padding: ${paddings.card.textContainer};
      transition: ${transition.theme};
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
    @media (min-width: 768px) {
    }
  }
`;

export const StyledLink = styled(Link)`
  max-width: 75%;
  min-width: 280px;
  margin: 2.4rem auto;
  box-shadow: ${shadows.search};
  transition: transform 0.2s linear;

  @media (min-width: 768px) {
    max-width: 100%;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
