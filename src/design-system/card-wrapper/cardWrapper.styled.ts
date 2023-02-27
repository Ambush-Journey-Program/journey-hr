import { NONAME } from 'dns';
import styled, { css } from 'styled-components';
import { devices } from '../../styles/theme';
import { CardProps } from './types';

// type ColorVariant = {
//   [key: string]: {
//     [key: string]: FlattenInterpolation<ThemeProps<ButtonType>>;
//   };
// };

export const Card = styled.div<CardProps>`
  padding: 1.25rem 2.5rem;
  /* box-shadow: 0px 4px 6px rgba(149, 136, 169, 0.05),
    0px 0px 30px rgba(231, 222, 209, 0.5);
  background-color: white; */
  border-radius: 1.25rem;
  width: 100%;
  max-width: 100%;

  @media ${devices.mobile} {
    padding: 0.75rem 1.25rem;
  }
`;

export const backgroundVariants: ColorVariant = {
  defaultColor: {
    defaultType: css`
      box-shadow: 0px 4px 6px rgba(149, 136, 169, 0.05),
        0px 0px 30px rgba(231, 222, 209, 0.5);
      background-color: ${(props) => props.theme.color.white};
    `,
  },
  transparent: {
    defaultType: css`
      box-shadow: transparent;
      background-color: transparent;
    `,
  },
};
