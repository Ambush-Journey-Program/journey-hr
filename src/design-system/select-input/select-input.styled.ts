import styled, { css } from 'styled-components';

import { StyledLegendProps, StyledSelectProps, StyleWrapper } from './types';

const disabledSelect = css`
  background-color: ${(props) => props.theme.color.white};
`;

const spanOptional = css`
  display: block;
`;

const spanError = css`
  display: block;
  color: ${(props) => props.theme.color.red};
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;
const errorDisplay = css`
  color: ${(props) => props.theme.color.red};
  border: ${(props) => `1px solid ${props.theme.color.red}`};
`;

export const Wrapper = styled.div<StyleWrapper>`
  margin-left: 40%;
  width: 391px;
  span {
    display: none;
    ${({ error }) => error && spanError};
  }
`;

export const Legend = styled.legend<StyledLegendProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.color.veryDarkPurple};
  margin-top: 37px;

  span {
    display: none;
    ${({ optional }) => optional && spanOptional}
  }
`;

export const Select = styled.select<StyledSelectProps>`
  display: flex;
  align-items: center;
  width: 391px;
  height: 52px;
  display: flex;
  border-radius: 12px;
  padding-left: 20px;
  margin-top: 4px;
  ${({ error }) => error && errorDisplay}
`;

export const Option = styled.option`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 391px;
  height: 304px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(149, 136, 169, 0.05),
    0px 0px 30px rgba(231, 222, 209, 0.5);
  border-radius: 10px;
`;
