import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 6px;
  max-width: 50%;
  @media ${devices.mobile} {
    max-width: 100%;
  }
`;
