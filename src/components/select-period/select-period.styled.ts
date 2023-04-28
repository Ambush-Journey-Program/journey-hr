import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 24px;

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
