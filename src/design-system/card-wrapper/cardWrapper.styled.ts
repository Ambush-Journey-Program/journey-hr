import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { WrapperType } from './types';

type WrapperProps = {
  variant: WrapperType;
};

type Variants = {
  [key: string]: FlattenSimpleInterpolation;
};

const variants: Variants = {
  horizontal: css`
    padding: 1.25rem 2.5rem;
  `,

  vertical: css`
    padding: 2.5rem 1.25rem;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  box-shadow: 0px 4px 6px rgba(149, 136, 169, 0.05),
    0px 0px 30px rgba(231, 222, 209, 0.5);
  background-color: white;
  border-radius: 1.25rem;

  ${({ variant }) => variants[variant]}
`;
