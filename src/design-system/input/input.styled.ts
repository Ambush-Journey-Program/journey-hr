import styled, { css } from 'styled-components';
import { StyledInputProps, StyleWrapper } from './types';

const disabledInput = css`
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};
  border-color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;

const spanError = css`
  display: block;

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
  box-shadow: ${(props) => props.theme.shadows.red};
  border: ${(props) => `1px solid ${props.theme.color.auxiliary.error}`};
`;

export const Wrapper = styled.div<StyleWrapper>`
  ${({ error }) => error && spanError}
`;

export const Input = styled.label`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: ${(props) => props.theme.font.fontFamilyBody};
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
  padding: 1.25rem;
  margin: 0.25rem 0;
  ${({ error }) => error && errorDisplay};
  ${({ disabled }) => disabled && disabledInput};

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 1px solid ${(props) => props.theme.color.brandColors.purple};
    ${({ error }) => error && errorDisplay}
  }

  & input {
    position: relative;
    display: flex;
    justify-content: flex-start;
    min-width: calc(100% - 5rem);
    width: 100%;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontFamilyBody};
    border: none;
    margin-left: 0.875rem;
    outline: none;
    color: ${(props) =>
      props.touched
        ? props.theme.color.contrasts.highContrast
        : props.theme.color.contrasts.lowestContrast};
        
    &::placeholder {
      color: ${(props) => props.theme.color.contrasts.lowestContrast};
    }
    ${({ disabled }) => disabled && disabledInput};
  }

  span {
    display: block;
  }

  & input::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: pointer;
    background: red;
    border: 5px red solid;
  }
`;
export const Span = styled.span`
  display: block;
  margin-right: 1.125;
  line-height: 1.125rem;
  width: 1.125rem;
  height: 1.125rem;
  color: ${(props) => props.theme.color.brandColors.red};
`;

export const SpanCorrect = styled.span`
  display: block;
`;
