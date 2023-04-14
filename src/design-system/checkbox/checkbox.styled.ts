import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import styled, { css } from 'styled-components';
import checkboxSVGpath from './assets/checked.svg';

type checkboxProps = {
  disabled: boolean;
};

const disabledInput = css`
  background-color: ${(props) => props.theme.color.button.disabled};
  border: solid ${(props) => props.theme.color.button.disabled};
  cursor: default;

  &:checked {
    background: none;
    border: none;
  }
  &:checked:after {
    svg path {
      fill: red;
      fill-rule: red;
      stroke: red;
    }
  }

  &:checked:hover,
  &:hover {
    color: ${(props) => props.theme.color.button.disabled};
    border-color: transparent;
  }
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
    border-color: ${(props) => props.theme.color.button.secondaryHover};
  }

  &:checked {
    background: none;
    border: none;
  }
  &:hover {
    border-color: ${(props) => props.theme.color.button.secondaryHover};
  }

  &:checked:after {
    content: url('${checkboxSVGpath}');
    padding: 2px;
  }

  ${({ disabled }) => disabled && disabledInput};
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
