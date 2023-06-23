import { devices } from '@/styles/devices';
import styled from 'styled-components';
import { FooterStyleProps } from './types';

export const Footer = styled.div<FooterStyleProps>`
  display: flex;
  align-items: center;
  padding: 2.5rem;
  width: 100%;
  gap: ${(props) => props.theme.spacings.spacing02};
  border-top: 1px solid;
  border-color: ${(props) => props.theme.color.contrasts.lightContrast};
  border-radius: 0 0 20px 20px;

  @media ${devices.tablet} {
    padding-top: 2.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-bottom: 2.5rem;
  }

  @media ${devices.mobile} {
    flex-direction: column;

    & button {
      width: 100%;
    }
  }

  justify-content: ${({ variant }) => variant === 'allDone' && 'center'};
`;
