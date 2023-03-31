import styled, { css } from 'styled-components';

import { StyledInputProps, StyleWrapper } from './types';

const spanError = css`
  display: block;
  margin-top: 4px;

  & input::placeholder {
    color: ${(props) => props.theme.color.auxiliary.error};
    border-color: red;
  }

  & input:active {
    border-color: red;
  }
`;

const errorDisplay = css`
  color: ${(props) => props.theme.color.auxiliary.error};
  border: ${(props) => `1px solid ${props.theme.color.auxiliary.error}`};
`;

export const Wrapper = styled.div<StyleWrapper>`
  ${({ error }) => error && spanError}
`;

export const InputContainer = styled.div<StyledInputProps>`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 18rem;
  font-weight: 300;
  font-size: 1rem;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  border-radius: 0.75rem;
  padding: 1.375rem;
  margin-top: 0.25rem;
  ${({ error }) => error && errorDisplay}

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 1px solid ${(props) => props.theme.color.brandColors.purple};
  }
  & textarea {
    width: 100%;
    height: 100%;
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    border: none;
    outline: none;
    font-family: 'Mundial', sans-serif;
    font-weight: 300;
    font-size: 1rem;
    color: ${(props) =>
      props.touched
        ? props.theme.color.contrasts.highContrast
        : props.theme.color.contrasts.lowestContrast};
  }
`;
