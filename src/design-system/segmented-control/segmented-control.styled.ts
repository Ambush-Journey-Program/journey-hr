import styled from 'styled-components';

export const Container = styled.div`
  width: 96px;
`;
export const LinkLabel = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  color: ${(props) => props.theme.color.brandColors.dark};
  background-color: transparent;
  cursor: pointer;
  svg {
    align-self: center;
    margin-right: 6px;
    width: 0.938rem;
    height: 0.938rem;
  }
  &:hover {
    color: ${(props) => props.theme.color.contrasts.highContrast};
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
