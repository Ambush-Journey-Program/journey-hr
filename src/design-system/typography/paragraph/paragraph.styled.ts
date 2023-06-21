import styled, { css } from 'styled-components';

import { ParagraphStyleProps } from './types';

const paragraphEl = {
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

const colorsVariants = {
  dark: css`
    color: ${(props) => props.theme.color.brandColors.dark};
  `,
  light: css`
    color: ${(props) => props.theme.color.brandColors.light};
  `,
  red: css`
    color: ${(props) => props.theme.color.brandColors.red};
  `,
  yellow: css`
    color: ${(props) => props.theme.color.brandColors.yellow};
  `,
  purple: css`
    color: ${(props) => props.theme.color.brandColors.purple};
  `,
  error: css`
    color: ${(props) => props.theme.color.auxiliary.error};
  `,
};

const paragraphWeightEl = {
  hair: css`
    font-weight: 200;
  `,
  semihair: css`
    font-weight: 300;
  `,
  light: css`
    font-weight: 400;
  `,

  semibold: css`
    font-weight: 600;
  `,
};

export const Paragraph = styled.p<ParagraphStyleProps>`
  font-family: ${(props) => props.theme.font.fontFamilyBody};
  width: 100%;
  ${({ colorVariant }) => colorsVariants[colorVariant]}

  ${({ size }) => paragraphEl[size]}
  ${({ fontWeight }) => paragraphWeightEl[fontWeight]}
`;
