import styled, { css } from 'styled-components';

import { StyledLabelProps, StyledInputProps, StyleWrapper } from './types';
import { selectPeriodProps } from '@/components/select-period/types';

const VariantInput = css`
  span {
    display: block;
  }
  & input {
    background-position: initial;
    display: flex;
    justify-content: flex-start;
    padding-left: 25px;
  }
  /* & input::-webkit-calendar-picker-indicator {
    background: transparent;
    background-position: initial;
  } */
`;
const disabledInput = css`
  background-color: ${(props) => props.theme.color.brandColors.light};
`;

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
const warnError = css`
  display: block;
  margin-top: 4px;

  & input::placeholder {
    color: ${(props) => props.theme.color.auxiliary.whiteDarkMode};
  }
`;

const errorDisplay = css`
  color: ${(props) => props.theme.color.auxiliary.error};
  border: ${(props) => `1px solid ${props.theme.color.auxiliary.error}`};
`;
const warnDisplay = css`
  color: ${(props) => props.theme.color.auxiliary.whiteDarkMode};
`;

export const Wrapper = styled.div<StyleWrapper>`
  ${({ error }) => error && spanError}
  ${({ warn }) => warn && warnError}
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
    color: ${(props) => props.theme.color.contrasts.lowContrast};
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
  ${({ warn }) => warn && warnDisplay}
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

    background-position: calc(100% - 0.625rem) center;
    background-size: 1.25em;
    background-repeat: no-repeat;
    &::placeholder {
      padding-left: 20px;
      margin-left: 20px;
      color: ${(props) => props.theme.color.contrasts.lowestContrast};
    }
  }
  & input::-webkit-calendar-picker-indicator {
    background: transparent;
    background-position: calc(100% - 0.625rem) center;
  }

  & input[type='date'] {
    background-image: url('src/design-system/input/assets/calendar-day.svg');
  }
  span {
    display: none;
  }

  ${({ variant }) => variant && VariantInput};
`;
export const Span = styled.span<selectPeriodProps>`
  display: block;
  margin-right: 18px;
  line-height: 1.125rem;
  width: 1.125rem;
  height: 1.125rem;
  color: ${(props) => props.theme.color.brandColors.red};
`;
