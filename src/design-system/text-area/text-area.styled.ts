import styled, { css } from 'styled-components';

import { StyledProps, StyleWrapper } from './types';

const spanErrorStyles = css`
  display: block;

  & input::placeholder {
    color: ${(props) => props.theme.color.auxiliary.error};
    border-color: ${(props) => props.theme.color.auxiliary.error};
  }

  & input:active {
    border-color: ${(props) => props.theme.color.auxiliary.error};
  }
`;

const errorDisplay = css`
  color: ${(props) => props.theme.color.auxiliary.error};
  border: ${(props) => `1px solid ${props.theme.color.auxiliary.error}`};
`;

export const Wrapper = styled.div<StyleWrapper>`
  ${({ error }) => error && spanErrorStyles}
`;

export const TextAreaContainer = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 18rem;
  font-weight: 300;
  font-size: 1rem;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  border-radius: 0.75rem;
  padding: 0.75rem 1.375rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  ${({ error }) => error && errorDisplay}

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 1px solid ${(props) => props.theme.color.brandColors.purple};
  }
`;

export const TextArea = styled.textarea<StyledProps>`
  width: 100%;
  height: 100%;
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
  border: none;
  outline: none;
  font-family: 'Mundial', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: ${(props) => props.theme.color.contrasts.highContrast};

  &:invalid {
    color: ${(props) => props.theme.color.auxiliary.error};
  }
`;
