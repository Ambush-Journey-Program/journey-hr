import styled, { css } from 'styled-components';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
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

  /* reset */

  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    radial-gradient(#ddd 70%, transparent 72%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;
  color: ${(props) => props.theme.color.purple};
  border: 1px solid ${(props) => props.theme.color.gray};
  ${({ error }) => error && errorDisplay}

  &:focus-within {
    outline: none;
    box-shadow: 0 0 2px ${(props) => props.theme.color.veryDarkPurple};
    border: 1px solid ${(props) => props.theme.color.blue};
  }

  & input {
    outline: none;
    border: none;
  }
`;
