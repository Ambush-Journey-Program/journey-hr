import styled from 'styled-components';

export const Underline = styled.div`
  top: -0.313rem;
  position: relative;
  border-bottom: solid 0.25rem ${(props) => props.theme.color.button.secondary};
  border-radius: 0.125rem;
  z-index: 1;
`;
export const Wrapper = styled.div`
  display: flex;
`;
