import styled, { css } from 'styled-components';
import { StyledSelectProps, StyleWrapper, StyledProps } from './types';

export const SpanRequired = styled.span`
  display: block;
`;

export const SpanError = styled.span<StyledProps>`
  display: block;
  color: ${(props) => props.theme.color.auxiliary.error};
  margin-top: 0.25rem;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
`;

const errorDisplay = css`
  color: ${(props) => props.theme.color.auxiliary.error};
  border: ${(props) => `1px solid ${props.theme.color.auxiliary.error}`};
`;

export const Wrapper = styled.div<StyleWrapper>`
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
  height: 52px;
  display: flex;
  border-radius: 0.75rem;
  padding-left: 1.25rem;
  padding: 0.875rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E');
  background-position: calc(100% - 1.6em) center;
  background-size: 0.9em;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  ${({ error }) => error && errorDisplay}

  &:focus-within {
    outline: none;
    box-shadow: 0 0 2px ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 1px solid ${(props) => props.theme.color.brandColors.purple};
  }

  & input {
    outline: none;
    border: none;
  }
`;
