import { devices } from '@/styles/devices';
import styled, {
  FlattenInterpolation,
  ThemeProps,
  css,
} from 'styled-components';
import { ColorProp, CardProps } from './types';

export type Background = {
  [key: string]: FlattenInterpolation<ThemeProps<ColorProp>>;
};

const backgroundVariants: Background = {
  default: css`
    box-shadow: ${(props) => props.theme.shadows.cream};
    background-color: ${(props) => props.theme.color.auxiliary.white};
  `,
  transparent: css`
    box-shadow: none;
    background-color: transparent;
  `,
};

export const Card = styled.div<CardProps>`
  padding: 1.25rem 2.5rem;
  border-radius: 1.25rem;
  max-width: 100%;

  @media ${devices.mobile} {
    padding: 0.75rem 1.25rem;
  }

  ${({ background }) => backgroundVariants[background ?? 'default']}
`;
