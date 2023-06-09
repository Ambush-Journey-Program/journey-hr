import styled from 'styled-components';
import { StyledLabelProps } from './types';

export const Label = styled.label<StyledLabelProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 150%;
  color: ${(props) => props.theme.color.contrasts.mediumContrast};

  span {
    color: ${(props) => props.theme.color.contrasts.lowContrast};
  }
`;