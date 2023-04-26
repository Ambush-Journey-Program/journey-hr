import styled from 'styled-components';
import { devices } from '@/styles/devices';

export const Wrapper = styled.div`
  gap: 16px;
`;

export const ParagraphStyle = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: 500;
  line-height: 24px;
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  color: ${(props) => props.theme.color.contrasts.highContrast};
  @media ${devices.tablet} {
    font-size: 18px;
    line-height: 27px;
  }
`;
