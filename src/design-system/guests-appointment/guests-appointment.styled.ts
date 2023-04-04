import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  border-radius: 0.625rem;
  width: 100%;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};

  @media ${devices.tabletLarge}, ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.desktop} {
    padding-bottom: 1.25rem;
  }
`;
