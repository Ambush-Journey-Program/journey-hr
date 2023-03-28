import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { DoodlesStyleProps } from './types';

type ColorVariant = {
  [key: string]: FlattenInterpolation<ThemeProps<DoodlesStyleProps>>;
};

const colorsVariants: ColorVariant = {
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
