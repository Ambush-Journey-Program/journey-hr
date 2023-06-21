import styled from 'styled-components';

export const RequestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => props.theme.spacings.spacing07};

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
  padding-top: ${(props) => props.theme.spacings.spacing05};
  gap: ${(props) => props.theme.spacings.spacing04};

  p {
    font-size: ${(props) => props.theme.spacings.spacing03};
    line-height: ${(props) => props.theme.spacings.spacing03};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.color.contrasts.mediumContrast};
  }
`;
