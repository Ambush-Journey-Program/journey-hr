import styled from 'styled-components';

export const badge = styled.div`
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};
`;
