import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { IDoodlesProps } from './types';

export const wrapper = styled.span<IDoodlesProps>`
  svg {
    width: 100px;
    height: 100px;
    path {
      ${({ colors }) => colorsVariants[colors]};
    }
  }
`;

type ColorVariant = {
  [key: string]: FlattenInterpolation<ThemeProps<IDoodlesProps>>;
};
const colorsVariants: ColorVariant = {
  red: css`
    stroke: ${(props) => props.theme.color.brandColors.red}!important;
  `,

  purple: css`
    stroke: ${(props) => props.theme.color.brandColors.purple}!important;
  `,

  yellow: css`
    stroke: ${(props) => props.theme.color.brandColors.yellow}!important;
  `,
  light: css`
    stroke: ${(props) => props.theme.color.brandColors.light}!important;
  `,
  dark: css`
    stroke: ${(props) => props.theme.color.contrasts.mediumContrast}!important;
  `,
};
