import { devices } from '@/styles/devices';
import styled from 'styled-components';
import {
  childrenAppointment,
  ShortHappyHourWrapperProps,
  styleChildrenDate,
} from './types';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  padding: 12px;
  gap: 18px;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};

  @media ${devices.tabletLarge} {
    flex-direction: row;
    gap: 50px;
    padding-bottom: 22px;
  }

  @media ${devices.tablet}, ${devices.desktop} {
    padding-bottom: 20px;
  }
`;

// export const ContainerAppointment = styled.p<childrenAppointment>`
//   color: ${(props) => props.theme.color.contrasts.highContrast};
// `;

// export const ContainerDate = styled.p<styleChildrenDate>`
//   color: ${(props) => props.theme.color.contrasts.mediumContrast};
//   line-height: 30px;
//   font-size: 20px;
//   font-family: ${(props) => props.theme.fonts.font.fontFamilyBody};
// `;
