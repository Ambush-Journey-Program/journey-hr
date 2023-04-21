import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 42px;
  padding: 24px;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const VeticalLine = styled.hr`
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  height: 44px;
  margin-bottom: 0;
  padding-bottom: 0;
`;
