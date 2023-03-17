import styled from 'styled-components';

export const scheduleCardList = styled.ul`
  padding: 1.5rem;
  text-align: center;

  h2 {
    color: ${(props) => props.theme.color.contrasts.mediumContrast};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.875rem;
    padding-bottom: 1.5rem;
  }

  li {
    padding-bottom: 1.5rem;

    h3 {
      color: ${(props) => props.theme.color.contrasts.mediumContrast};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 125%;
      padding-bottom: 0.5rem;
    }

    p {
      color: ${(props) => props.theme.color.contrasts.lowContrast};
      font-weight: 600;
      font-size: 1rem;
      line-height: 150%;
    }
  }

  button {
    margin: 0 auto;
  }
`;
