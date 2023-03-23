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
  font-size: 0.75rem;
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
  ${({ error }) => error && spanError}
`;

export const Label = styled.label<StyledLabelProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 150%;
  color: ${(props) => props.theme.color.contrasts.mediumContrast};

  span {
    display: none;
    ${({ optional }) => optional && spanOptional}
  }
`;

export const Input = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const InputContainer = styled.div<StyledInputProps>`
  display: flex;
  align-items: center;
  height: 3.25rem;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  border-radius: 0.75rem;
  padding-left: 1.25rem;
  margin-top: 0.25rem;
  ${({ error }) => error && errorDisplay}
  ${({ disabled }) => disabled && disabledInput};

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 1px solid ${(props) => props.theme.color.brandColors.purple};
  }
  & input {
    width: calc(100% - 1rem);
    font-size: 1rem;
    border: none;
    outline: none;
    color: ${(props) =>
      props.touched
        ? props.theme.color.contrasts.highContrast
        : props.theme.color.contrasts.lowestContrast};
    background-image: url('src/design-system/select-input/assets/calendar.svg');
    background-position: calc(100% - 0.625rem) center;
    background-size: 1.25em;
    background-repeat: no-repeat;
  }
  & input::-webkit-calendar-picker-indicator {
    background: transparent;
    background-position: calc(100% - 0.625rem) center;
  }
`;
