import { devices } from '@/styles/devices';
import styled from 'styled-components';
import { FooterProps } from './types';

export const Footer = styled.div<FooterProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 40px;
  width: 100%;
  gap: 8px;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.color.contrasts.lightContrast};
  border-radius: 0px 0px 20px 20px;

  @media ${devices.tablet} {
    padding: 40px 20px;
  }

  @media ${devices.mobile} {
    flex-direction: column;
    & button {
      width: 100%;
    }
  }
  justify-content: ${({ variant }) => variant === 'allDone' && 'center'};
`;
