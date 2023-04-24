import styled from 'styled-components';

export const container = styled.div`
  display: flex;
`;
export const labelBbox = styled.div`
  :hover {
    border-bottom: solid 1px ${(props) => props.theme.color.button.secondary};
  }
`;
export const SelectorWord = styled.p``;
