import styled from 'styled-components';
import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { devices } from '@/styles/devices';

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
`;

export const SearchIcon = styled(MagnifyingGlassIcon)`
  width: 1.5em;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;
export const SingleUserIcon = styled(UserIcon)`
  width: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;
