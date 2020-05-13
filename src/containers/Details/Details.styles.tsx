/* eslint-disable eqeqeq */
import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from '../../utils/styles/helpers';

export const Styles = styled.div`
  height: 100%;
  max-width: 85%;
  margin: 0 auto;
  padding-bottom: 3rem;
  color: ${(props) => (props.theme == 'light' ? colors.black : colors.white)};

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  .detail-page {
    &__back-button-container {
      @media (min-width: 768px) {
        flex-basis: 100%;
      }
    }
    &__top-container,
    &__mid-container {
      margin-bottom: 3rem;
      @media (min-width: 768px) {
        flex-basis: 50%;
        margin-bottom: 1rem;
      }
    }

    &__bottom-container {
      display: flex;
      flex-wrap: wrap;
      @media (min-width: 768px) {
        flex-basis: 100%;
      }
    }

    &__flag-container {
      @media (min-width: 768px) {
        flex-basis: 45%;
      }
    }
    &__flag-image {
      width: 100%;
      max-height: ${rem('240px')};
      @media (min-width: 768px) {
        max-height: initial;
      }
    }

    &__info-container {
      @media (min-width: 768px) {
        flex-basis: 55%;
        padding: 0 0 0 8%;
        display: flex;
        flex-wrap: wrap;
      }
    }

    &__name-container {
      @media (min-width: 768px) {
        flex-basis: 100%;
      }
    }

    &__name {
      font-weight: 800;
      margin: 2rem 0 1.475rem;
      @media (min-width: 768px) {
        margin: 0 0 1rem;
      }
    }

    &__info {
      margin: 0.875rem 0;
    }

    &__info-title {
      font-weight: 600;
    }

    &__border-title {
      width: 100%;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.03rem;
      margin-bottom: 1rem;
    }
  }
`;
