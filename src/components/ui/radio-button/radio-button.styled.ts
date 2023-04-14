import { Paragraph } from '@/design-system/typography/paragraphs/paragraphs.styled';
import styled, { css } from 'styled-components';

type LabelProps = {
  disabled?: boolean;
};

const disabledLabel = css`
  p,
  p:hover {
    color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
`;

export const containerRadio = styled.div`
  display: block;
`;

export const itemRadio = styled.li<LabelProps>`
  display: flex;
  margin-bottom: 1rem;
  cursor: pointer;
  accent-color: ${(props) => props.theme.color.contrasts.highContrast};
  &:hover {
    accent-color: ${(props) => props.theme.color.button.secondaryHover};
  }
  &:disabled {
    accent-color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
  p:hover {
    color: ${(props) => props.theme.color.button.secondaryHover};
  }
  ${({ disabled }) => disabled && disabledLabel};
`;
export const radioInput = styled.input`
  display: flex;
  margin: 0rem;
  margin-right: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
`;

export const containerLabel = styled.label<LabelProps>`
  color: ${(props) => props.theme.color.contrasts.highContrast};
  ${({ disabled }) => disabled && disabledLabel};
`;

export const paragraphLabel = styled(Paragraph)``;
