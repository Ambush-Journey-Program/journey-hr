import { devices } from '@/styles/devices';
import styled from 'styled-components';
import { childrenAppointment, styleChildrenDate } from './types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};

  @media ${devices.tabletLarge}, ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.desktop} {
    padding-bottom: 20px;
  }
`;

export const ContainerName = styled.div`
  word-break: break-word;
`;

export const ContainerAppointment = styled.div<childrenAppointment>`
  margin-top: 6px;
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: 700;
  line-height: 22.5px;
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  color: ${(props) => props.theme.color.contrasts.highContrast};

  @media ${devices.tabletLarge} {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const ContainerDate = styled.div<styleChildrenDate>`
  margin-top: 6px;
  font-size: 18px;
  font-weight: 300;
  line-height: 27px;
  font-family: ${(props) => props.theme.font.fontFamilyBody};
  color: ${(props) => props.theme.color.contrasts.mediumContrast};
`;
