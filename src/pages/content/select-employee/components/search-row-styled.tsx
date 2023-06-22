import styled from 'styled-components';
import { devices } from '@/styles/devices';
import { spacings } from '@/styles/spacing';

export const DisplayResultsSearch = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.spacing04};
  @media ${devices.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const employeeInfo = styled.div`
  display: flex;
  gap: ${spacings.spacing04};
`;
