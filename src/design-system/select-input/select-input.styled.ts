import styled, { css } from 'styled-components';
import { StyledSelectProps, StyledProps } from './types';

export const SpanRequired = styled.span`
  display: block;
`;

export const SpanError = styled.span<StyledProps>`
  display: block;
  margin-top: 0.25rem;

  line-height: 1.125rem;
`;

const errorDisplay = css`
  color: ${(props) => props.theme.color.auxiliary.error};
  border: ${(props) => `1px solid ${props.theme.color.auxiliary.error}`};
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Legend = styled.legend<StyledProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 150%;
  color: ${(props) => props.theme.color.contrasts.mediumContrast};
`;

export const Select = styled.select<StyledSelectProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.25rem;
  font-size: 1rem;
  border-radius: 0.75rem;
  padding-left: 1.25rem;
  margin-top: 0.25rem;
  padding: 0.875rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('src/design-system/select-input/assets/chevron-down.svg');
  background-position: calc(100% - 1.6em) center;
  background-size: 1.25em;
  background-repeat: no-repeat;
  color: ${(props) =>
    props.touched
      ? props.theme.color.contrasts.highContrast
      : props.theme.color.contrasts.lowestContrast};
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  ${({ error }) => error && errorDisplay}

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 0.063rem solid ${(props) => props.theme.color.brandColors.purple};
  }

  & input {
    outline: none;
    border: none;
  }
`;
