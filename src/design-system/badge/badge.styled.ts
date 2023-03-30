import styled from 'styled-components';

export const badge = styled.span`
  width: 100%;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};
  border-radius: 12px;
`;
