import styled, { css } from 'styled-components';

import { StyledSelectProps, StyleWrapper, StyledProps } from './types';

export const SpanRequired = styled.span`
  display: block;
`;

export const SpanError = styled.span<StyledProps>`
  display: block;
  color: ${(props) => props.theme.color.red};
  margin-top: 0.25rem;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
`;

const errorDisplay = css`
  color: ${(props) => props.theme.color.red};
  border: ${(props) => `1px solid ${props.theme.color.red}`};
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
  color: ${(props) => props.theme.color.veryDarkPurple};
`;

export const Select = styled.select<StyledSelectProps>`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  border-radius: 0.75rem;
  padding-left: 1.25rem;
  padding: 0.875rem;
  ${({ error }) => error && errorDisplay}
`;