import styled from 'styled-components';

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 150%;
  font-family: Mundial, sans-serif;
  border-radius: 50px;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  background-color: transparent;
  &:hover {
    opacity: 0.8;
  }

  img {
    margin-right: 0.375rem;
    align-self: center;
    width: 1.031rem;
    height: 1.031rem;
    fill: ${(props) => props.theme.color.contrasts.highContrast};
  }

  &:disabled {
    opacity: 0.8;
  }
`;
