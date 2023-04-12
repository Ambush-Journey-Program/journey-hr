import styled, { css } from 'styled-components';

const disabledInput = css`
  background-color: ${(props) => props.theme.color.button.disabled};
  border: solid ${(props) => props.theme.color.button.disabled};
`;

export const Wrapper = styled.form`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 22px;
  gap: 10px;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  display: flex;
  &:hover {
    color: ${(props) => props.theme.color.button.secondaryHover};
  }
`;

export const CheckBox = styled.input`
  background-color: ${(props) => props.theme.color.brandColors.white};
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;

  display: block;
  width: 20px;
  height: 20px;
  border: 3px solid ${(props) => props.theme.color.contrasts.highContrast};
  border-radius: 2px;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  ${({ disabled }) => disabled && disabledInput};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.button.secondaryHover};
    border-color: ${(props) => props.theme.color.button.secondaryHover};
  }

  &:checked {
    background: ${(props) => props.theme.color.contrasts.highContrast};
    align-items: baseline;
    ${({ disabled }) => disabled && disabledInput};
    &:hover {
      background-color: ${(props) => props.theme.color.button.secondaryHover};
      border-color: ${(props) => props.theme.color.button.secondaryHover};
    }

    &:checked:after {
      content: '\u2714';
      color: white;
      padding: 2px;
    }
  }
`;

export const Label = styled.label`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
