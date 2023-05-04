import { Badge } from '@/design-system';
import {
  MagnifyingGlassIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import styled, { css } from 'styled-components';
import { SelectEmployeeProps } from './types';
import { devices } from '@/styles/devices';

const errorDisplay = css`
  border-color: ${(props) => props.theme.color.auxiliary.error};
  box-shadow: 0 0 0 0.25rem rgba(217, 73, 73, 0.2);
`;

export const Span = styled.span<SelectEmployeeProps>`
  display: ${(props) => props.error ?? 'block'};
  max-width: 24.375rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: ${(props) => props.theme.color.auxiliary.white};
  box-shadow: ${(props) => props.theme.shadows.cream};
  border-radius: 1.25rem;
  padding: 2.5rem;
`;

export const SearchBox = styled.div<SelectEmployeeProps>`
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 0.063rem solid ${(props) => props.theme.color.contrasts.lowContrast};
  ${({ error }) => error && errorDisplay}
  border-radius: 0.75rem;
  max-width: 24.063rem;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledInput = styled.input`
  border: none;
  font-family: 'Mundial';
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 150%;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  ::placeholder {
    color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
  flex-grow: 1;
`;

export const mainDiv = styled.div``;

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

export const StyledBadge = styled(Badge)``;

export const StyeldUsersIcon = styled(UsersIcon)`
  width: 1rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;

export const StyledSearchIcon = styled(MagnifyingGlassIcon)`
  width: 1.5em;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;
export const StyeldUserIcon = styled(UserIcon)`
  width: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;
