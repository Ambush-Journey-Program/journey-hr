import styled from 'styled-components';

export const Tab = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  color: ${(props) => props.theme.color.brandColors.dark};
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  svg {
    align-self: center;
    margin-right: 6px;
    width: 0.938rem;
    height: 0.938rem;
    fill: ${(props) => props.theme.color.brandColors.dark};
  }
  p:hover {
    color: ${(props) => props.theme.color.button.secondaryHover};
    svg {
      fill: ${(props) => props.theme.color.button.secondaryHover};
    }
  }
  p:focus {
    box-shadow: none;
    color: ${(props) => props.theme.color.button.secondary};
    svg {
      fill: ${(props) => props.theme.color.button.secondary};
    }
  }
  &:focus {
    border-bottom: solid 4px ${(props) => props.theme.color.button.secondary};
  }
  &:disabled {
    color: ${(props) => props.theme.color.button.disabled};
    svg {
      fill: ${(props) => props.theme.color.button.disabled};
    }
  }
`;
