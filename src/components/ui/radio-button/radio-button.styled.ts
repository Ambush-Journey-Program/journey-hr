import { Paragraphs, Subtitle } from '@/design-system';
import styled, { css } from 'styled-components';

type LabelProps = {
  disabled: boolean;
};

const disabledLabel = css`
  &:hover {
    color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
`;

export const containerRadio = styled.div`
  display: block;
`;

export const itemRadio = styled.li`
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;
  accent-color: ${(props) => props.theme.color.contrasts.highContrast};
  &:hover {
    accent-color: ${(props) => props.theme.color.button.secondaryHover};
    color: ${(props) => props.theme.color.button.secondaryHover};
  }
  &:disabled {
    accent-color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
`;
export const radioInput = styled.input`
  display: flex;
  margin: 0px;
  margin-right: 10px;
`;
export const containerLabel = styled.label<LabelProps>`
  display: flex;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  &:hover {
    color: ${(props) => props.theme.color.button.secondaryHover};
  }
  ${({ disabled }) => disabled && disabledLabel};
`;
