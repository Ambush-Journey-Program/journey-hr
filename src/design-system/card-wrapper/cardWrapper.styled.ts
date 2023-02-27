import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { devices } from '../../styles/theme';
import { CardProps, ColorProp } from './types';

export type ColorVariant = {
  [key: string]: FlattenInterpolation<ThemeProps<ColorProp>>;
};

const backgroundVariants: ColorVariant = {
  default: css`
    box-shadow: 0px 4px 6px rgba(149, 136, 169, 0.05),
      0px 0px 30px rgba(231, 222, 209, 0.5);
    background-color: ${(props) => props.theme.color.white};
  `,
  transparent: css`
    box-shadow: none;
    background-color: transparent;
  `,
};

export const Card = styled.div<CardProps>`
  padding: 1.25rem 2.5rem;
  border-radius: 1.25rem;
  width: 100%;
  max-width: 100%;

  @media ${devices.mobile} {
    padding: 0.75rem 1.25rem;
  }

  ${({ colorVariant }) => backgroundVariants[colorVariant]}
`;
