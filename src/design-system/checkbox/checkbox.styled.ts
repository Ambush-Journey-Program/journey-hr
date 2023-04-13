import styled, { css } from 'styled-components';

type checkboxProps = {
  disabled: boolean;
};

const disabledInput = css`
  background-color: ${(props) => props.theme.color.button.disabled};
  border: solid ${(props) => props.theme.color.button.disabled};

  &:hover {
    background-color: ${(props) => props.theme.color.button.disabled};
    color: ${(props) => props.theme.color.button.disabled};
    border: none;
  }
  cursor: default;
`;

const disabledLabel = css`
  p {
    color: ${(props) => props.theme.color.button.disabled};
  }
  &:hover {
    color: ${(props) => props.theme.color.button.disabled};
    p {
      color: ${(props) => props.theme.color.button.disabled};
    }
  }
`;

export const Label = styled.label<checkboxProps>`
  gap: 10px;
  display: flex;
  align-items: flex-start;

  &:hover {
    p {
      color: ${(props) => props.theme.color.button.secondaryHover};
    }
  }

  ${({ disabled }) => disabled && disabledLabel};
`;

export const CheckBox = styled.input`
  background-color: ${(props) => props.theme.color.brandColors.white};
  appearance: none;
  display: block;
  width: 20px;
  height: 20px;
  border: 3px solid ${(props) => props.theme.color.contrasts.highContrast};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.button.secondaryHover};
    border-color: ${(props) => props.theme.color.button.secondaryHover};
  }

  &:checked {
    background: ${(props) => props.theme.color.contrasts.highContrast};

    &:hover {
      background-color: ${(props) => props.theme.color.button.secondaryHover};
    }

    ${({ disabled }) => disabled && disabledInput};

    &:checked:after {
      content: '\u2714';
      color: white;
      padding: 2px;
    }
  }
  ${({ disabled }) => disabled && disabledInput};
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
