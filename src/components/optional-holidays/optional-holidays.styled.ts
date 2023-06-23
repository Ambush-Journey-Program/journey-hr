import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.color.contrasts.lightContrast};
  border-radius: 0.625rem;
  width: 100%;
  padding: 2.5rem;
`;

export const CheckboxDiv = styled.div`
  margin-top: ${(props) => props.theme.spacings.spacing06};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing04};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing02};
`;
