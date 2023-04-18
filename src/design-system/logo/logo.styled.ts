import styled, {
  css,
  type FlattenInterpolation,
  type ThemeProps,
} from 'styled-components';
import { type LogoProps, type ColorType } from './types';

type ColorVariants = Record<
  string,
  FlattenInterpolation<ThemeProps<ColorType>>
>;

const color: ColorVariants = {
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
};

export const Image = styled.span<LogoProps>`
  svg {
    width: 100%;
    height: 100%;
  }

  ${({ colorVariant }) => color[colorVariant]};
`;
