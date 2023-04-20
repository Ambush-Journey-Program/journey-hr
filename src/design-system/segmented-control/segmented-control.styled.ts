import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;
export const ButtonLabel = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.color.brandColors.dark};
  &:hover {
    color: ${(props) => props.theme.color.button.secondaryHover};
  }
  &:focus {
    box-shadow: none;
    border-bottom: solid 4px ${(props) => props.theme.color.button.secondary};
    svg {
      fill: ${(props) => props.theme.color.button.secondary};
    }
  }
  &:disabled {
    box-shadow: none;
    color: ${(props) => props.theme.color.button.disabled};
  }
`;
