import styled from 'styled-components';

export const RequestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  h6 {
    line-height: 1.875rem;
  }

  p {
    line-height: 1.6875rem;
  }
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1.5rem;
  gap: 1rem;

  p {
    font-size: 0.75rem;
    line-height: 0.75rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.color.contrasts.mediumContrast};
  }
`;
