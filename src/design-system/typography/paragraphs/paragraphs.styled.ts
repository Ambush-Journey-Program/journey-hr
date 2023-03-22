import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ParagraphsProps } from './types';

type ParagraphsStyle = {
  [key: string]: FlattenSimpleInterpolation;
};

type WeightStyle = {
  [key: string]: FlattenSimpleInterpolation;
};

const paragraphsEl: ParagraphsStyle = {
  giant: css`
    font-size: 1.5rem;
  `,

  extralarge: css`
    font-size: 1.375rem;
  `,

  large: css`
    font-size: 1.25rem;
  `,

  medium: css`
    font-size: 1.125rem;
  `,

  default: css`
    font-size: 1rem;
  `,

  small: css`
    font-size: 0.875rem;
  `,

  extrasmall: css`
    font-size: 0.75rem;
  `,

  tiny: css`
    font-size: 0.625rem;
  `,
};

const paragraphsWeightEl: WeightStyle = {
  hair: css`
    font-weight: 200;
  `,

  light: css`
    font-weight: 400;
  `,

  semibold: css`
    font-weight: 600;
  `,
};

export const Paragraph = styled.p<ParagraphsProps>`
  font-family: ${(props) => props.theme.font.fontFamilyBody};
  color: ${(props) => props.theme.color.contrasts.highContrast};

  ${({ size }) => paragraphsEl[size]}
  ${({ fontWeight }) => paragraphsWeightEl[fontWeight]}
`;
