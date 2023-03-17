import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { devices } from '../../styles/devices';

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
    border-radius: 7rem;
  `,

  small: css`
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  `,
};

export const Image = styled.img<AvatarProps>`
  ${({ sizeVariant }) => variants[sizeVariant]}

  @media ${devices.mobile} {
    ${variants['small']}
  }
`;
