import styled, { css } from 'styled-components';

type checkboxProps = {
  disabled: boolean;
};

const disabledInput = css`
  background-color: ${(props) => props.theme.color.button.disabled};
  border: solid ${(props) => props.theme.color.button.disabled};

  &:checked,
  :checked:hover {
    border: ${(props) => props.theme.color.button.disabled};
    content: url('/static/images/checked.svg');
    filter: grayscale(0.8) brightness(2.4);
  }

  &:hover {
    color: ${(props) => props.theme.color.button.disabled};
    border: ${(props) => props.theme.color.button.disabled};
  }
  cursor: not-allowed;
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
  cursor: not-allowed;
`;

export const Label = styled.label<checkboxProps>`
  gap: 0.625rem;
  display: flex;
  align-items: flex-start;
  cursor: pointer;

  &:hover {
    p {
      color: ${(props) => props.theme.color.button.secondaryHover};
    }
  }

  ${({ disabled }) => disabled && disabledLabel};
`;

export const CheckBox = styled.input`
  background-color: ${(props) => props.theme.color.brandColors.light};
  appearance: none;
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  border: 3px solid ${(props) => props.theme.color.contrasts.highContrast};
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.color.button.secondaryHover};
  }

  &:checked {
    background: none;
    border: none;
    content: url('/static/images/checked.svg');
  }
  &:checked:hover {
    content: url('/static/images/checkedHover.svg');
  }
  &:hover {
    border-color: ${(props) => props.theme.color.button.secondaryHover};
  }

  ${({ disabled }) => disabled && disabledInput};
`;

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.313rem;
`;
