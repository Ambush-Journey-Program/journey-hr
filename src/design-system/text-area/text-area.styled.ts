import styled, { css } from 'styled-components';

import { StyledProps } from './types';

const error = css`
  &:invalid {
    color: ${(props) => props.theme.color.auxiliary.error};
    + p {
      display: block;
    }
  }
`;

export const TextAreaContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 18rem;
  font-weight: 300;
  font-size: 1rem;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

export const TextArea = styled.textarea<StyledProps>`
  width: 100%;
  resize: none;
  font-family: 'Mundial', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  border-radius: 0.75rem;
  padding: 0.75rem 1.375rem;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 1px solid ${(props) => props.theme.color.brandColors.purple};
  }
  & + p {
    display: none;
  }
  ${({ internalTouched }) => internalTouched && error}
`;
