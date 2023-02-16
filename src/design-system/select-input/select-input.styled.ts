import styled, { css } from 'styled-components';

import { StyledSelectProps, StyleWrapper, StyledProps } from './types';

const disabledSelect = css`
  background-color: ${(props) => props.theme.color.white};
`;

const spanOptional = css`
  display: block;
`;

const spanError = css`
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
  width: 24.438rem;
  span {
    ${({ error }) => error && spanError};
  }
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
  span {
    ${({ optional }) => optional && spanOptional}
  }
`;
// margin-top: 2.3rem;

export const Select = styled.select<StyledSelectProps>`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  border-radius: 0.75rem;
  padding-left: 1.25rem;
  margin-top: 0.25rem;
  ${({ error }) => error && errorDisplay}
`;

export const Option = styled.option`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0.25rem 0.375rem rgba(149, 136, 169, 0.05),
    0 0 1.75rem rgba(231, 222, 209, 0.5);
  border-radius: 0.625rem;
`;
