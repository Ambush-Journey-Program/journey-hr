import styled, { css } from 'styled-components';
import { devices } from '@/styles/devices';
import { AvatarProps } from './types';

const variants = {
  large: css`
    height: 7rem;
    width: 7rem;
    border-radius: 7rem;
  `,

  small: css`
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  `
};

export const Image = styled.img<AvatarProps>`
  ${({ sizeVariant }) => variants[sizeVariant]}

  @media ${devices.mobile} {
    ${variants.small}
  }
`;
