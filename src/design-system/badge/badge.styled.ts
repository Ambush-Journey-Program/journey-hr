import styled from 'styled-components';

export const badge = styled.div`
  max-width: 100%;
  padding: 0.625rem 0.75rem;
  border-radius: ${(props) => props.theme.spacings.spacing03};
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};

  p {
    white-space: nowrap;
  }
`;
