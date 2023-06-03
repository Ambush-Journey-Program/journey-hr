import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { DoodlesStyleProps } from './types';



const colorsVariants= {
  red: css`
    stroke: ${(props) => props.theme.color.brandColors.red};
  `,

  purple: css`
    stroke: ${(props) => props.theme.color.brandColors.purple};
  `,

  yellow: css`
    stroke: ${(props) => props.theme.color.brandColors.yellow};
  `,

  light: css`
    stroke: ${(props) => props.theme.color.brandColors.light};
  `,

  dark: css`
    stroke: ${(props) => props.theme.color.contrasts.mediumContrast};
  `,
};

export const wrapper = styled.span<DoodlesStyleProps>`
  svg {
    width: 100px;
    height: 100px;
    path {
      ${({ colors }) => colorsVariants[colors]};
    }
  }
`;
