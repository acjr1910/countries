import styled from 'styled-components';

export const Styles = styled.div`
  width: 100%;
  .countries {
    &__cards-container {
      display: flex;
      flex-wrap: wrap;
      @media (min-width: 768px) {
        justify-content: flex-start;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        justify-items: center;
        grid-gap: 0 3rem;
      }
    }
  }
`;
