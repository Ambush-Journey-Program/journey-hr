import styled, { css } from 'styled-components';
import { StyledSelectProps, StyledProps } from './types';

export const SpanRequired = styled.span`
  display: block;
`;

export const Span = styled.span<StyledProps>`
  display: block;
  margin-top: ${(props) => props.theme.spacings.spacing01};
  line-height: 1.125rem;
`;

const errorDisplay = css`
  color: ${(props) => props.theme.color.auxiliary.error};
  border: ${(props) => `1px solid ${props.theme.color.auxiliary.error}`};
`;

const warnDisplay = css`
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
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
  font-family: ${(prop) => prop.theme.font.fontFamilyBody};
`;

export const Select = styled.select<StyledSelectProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.25rem;
  font-size: ${(props) => props.theme.spacings.spacing04};
  border-radius: ${(props) => props.theme.spacings.spacing03};
  padding-left: 1.25rem;
  margin-top: ${(props) => props.theme.spacings.spacing01};
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
  ${({ warn }) => warn && warnDisplay}

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
