import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { ColorsProps, LogoStyleProps } from './types';

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
};

export const Image = styled.span<LogoStyleProps>`
  svg {
    width: 100%;
    height: 100%;
  }

  ${({ colorVariant }) => colorsVariants[colorVariant]};
`;
