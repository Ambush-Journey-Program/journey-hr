import styled, { css } from 'styled-components';

import { StyledLabelProps, StyledInputProps, StyleWrapper } from './types';

const disabledInput = css`
  background-color: ${(props) => props.theme.color.brandColors.light};
`;
const spanError = css`
  display: block;
  color: ${(props) => props.theme.color.auxiliary.error};
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
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

const spanOptional = css`
  display: block;
`;
export const Wrapper = styled.div<StyleWrapper>`
  /* width: 391px; */
  ${({ error }) => error && spanError}
`;

export const Label = styled.label<StyledLabelProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: mundial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.color.contrasts.mediumContrast};
  margin-top: 37px;

  span {
    display: none;
    ${({ optional }) => optional && spanOptional}
  }
`;

export const Input = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;

export const InputContainer = styled.div<StyledInputProps>`
  display: flex;
  align-items: center;
  /* width: 391px; */
  height: 52px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  border-radius: 12px;
  padding-left: 20px;
  margin-top: 4px;
  ${({ error }) => error && errorDisplay}
  ${({ disabled }) => disabled && disabledInput};

  &:focus-within {
    outline: none;
    box-shadow: 0 0 2px ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 1px solid ${(props) => props.theme.color.brandColors.purple};
  }
  & input {
    /* width: 329px; */
    outline: none;
    border: none;
  }
`;
