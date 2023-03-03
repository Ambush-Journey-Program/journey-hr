import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { devices } from '../../styles/theme';

type AvatarProps = {
  sizeVariant: string;
};

type Variants = {
  [key: string]: FlattenSimpleInterpolation;
};

const variants: Variants = {
  large: css`
    height: 7rem;
    width: 7rem;
  `,

  small: css`
    height: 4rem;
    width: 4rem;
  `,
};

export const Image = styled.img<AvatarProps>`
  height: 7rem;
  width: 7rem;
  border-radius: 7rem;

  @media ${devices.mobile} {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
    ${({ sizeVariant }) => variants[sizeVariant]}
  }

  ${({ sizeVariant }) => variants[sizeVariant]}
`;
