import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { CardWrapperType } from './types';

type CardWrapperProps = {
  variant: CardWrapperType;
};

type Variants = {
  [key: string]: FlattenSimpleInterpolation;
};

const variants: Variants = {
  desktop: css`
    padding: 1.25rem 2.5rem;
  `,

  mobile: css`
    padding: 0.75rem 1.25rem;
  `,
};

export const CardWrapper = styled.div<CardWrapperProps>`
  box-shadow: 0px 4px 6px rgba(149, 136, 169, 0.05),
    0px 0px 30px rgba(231, 222, 209, 0.5);
  background-color: white;
  border-radius: 1.25rem;
  max-width: 100%;

  ${({ variant }) => variants[variant]}
`;
