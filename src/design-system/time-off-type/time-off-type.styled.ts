import styled from 'styled-components';
import { devices } from '@/styles/devices';

export const Wrapper = styled.div`
  gap: 1rem;
`;

export const ParagraphStyle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  color: ${(props) => props.theme.color.contrasts.highContrast};
  @media ${devices.tablet} {
    font-size: 1.125rem;
    line-height: 1.688rem;
  }
`;
