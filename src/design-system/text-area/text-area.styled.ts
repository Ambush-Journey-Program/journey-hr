import { devices } from '@/styles/devices';
import styled, { css } from 'styled-components';

import { StyledProps, StyledLabelProps } from './types';

const error = css`
  &:invalid {
    color: ${(props) => props.theme.color.auxiliary.error};

    + p {
      display: block;
    }
  }
`;

export const Label = styled.label<StyledLabelProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 150%;
  color: ${(props) => props.theme.color.contrasts.mediumContrast};
  font-family: ${(prop) => prop.theme.font.fontFamilyBody};

  span {
    color: ${(props) => props.theme.color.contrasts.lowContrast};
  }
`;

export const TextAreaContainer = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-width: 18rem;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

export const TextArea = styled.textarea<StyledProps>`
  width: 100%;
  resize: none;
  font-family: Mundial, sans-serif;
  font-weight: 300;
  font-size: ${(props) => props.theme.spacings.spacing04};
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  border-radius: ${(props) => props.theme.spacings.spacing03};
  padding: 0.75rem 1.375rem;
  margin-bottom: ${(props) => props.theme.spacings.spacing01};
  color: ${(props) => props.theme.color.contrasts.highContrast};

  @media ${devices.mobile} {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }

  &::placeholder {
    color: ${(props) => props.theme.color.contrasts.lowestContrast};

    @media ${devices.mobile} {
      font-size: 0.875rem;
    }
  }

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
