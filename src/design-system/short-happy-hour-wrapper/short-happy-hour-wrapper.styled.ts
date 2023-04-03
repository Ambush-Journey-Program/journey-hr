import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 18px;
  padding: 12px;
  padding-bottom: 23px;
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
