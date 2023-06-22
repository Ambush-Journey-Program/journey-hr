import styled from 'styled-components';
import { devices } from '@/styles/devices';
import { Icon } from '@/design-system/icon/icon';

export const DisplayResultsSearch = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.063rem;
  @media ${devices.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const employeeInfo = styled.div`
  display: flex;
  gap: 1.063rem;
`;

export const IconUser = styled(Icon)`
  margin-left: 1rem;
  margin-right: 1rem;
`;
