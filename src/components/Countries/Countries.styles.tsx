import styled from 'styled-components';

export const Styles = styled.div`
  width: 100%;
  .countries {
    &__cards-container {
      display: flex;
      flex-wrap: wrap;
      @media (min-width: 768px) {
        justify-content: space-between;
      }
    }
  }
`;
