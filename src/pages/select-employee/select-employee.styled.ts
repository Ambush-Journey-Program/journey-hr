import { Badge } from '@/design-system';
import {
  MagnifyingGlassIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import styled, { css } from 'styled-components';
import { SelectEmployeeProps } from './types';

const errorDisplay = css`
  border-color: ${(props) => props.theme.color.auxiliary.error};
  box-shadow: 0px 0px 0px 4px rgba(217, 73, 73, 0.2);
`;

export const Span = styled.span<SelectEmployeeProps>`
  display: ${(props) => props.error ?? 'block'};
  max-width: 390px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${(props) => props.theme.color.auxiliary.white};
  box-shadow: ${(props) => props.theme.shadows.cream};
  border-radius: 20px;
  padding: 40px;
`;

export const SearchBox = styled.div<SelectEmployeeProps>`
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #9588a9;
  ${({ error }) => error && errorDisplay}
  border-radius: 12px;
  max-width: 385px;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInput = styled.input`
  border: none;
  font-family: 'Mundial';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: ${(props) => props.theme.color.contrasts.highContrast};
  ::placeholder {
    color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
  flex-grow: 1;
  flex-shrink: 1;
`;

export const RelativeDiv = styled.div``;

export const DisplayResultsSearch = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`;

export const StyledBadge = styled(Badge)`
  p {
    white-space: nowrap !important;
  }
`;

export const StyeldUsersIcon = styled(UsersIcon)`
  width: 16px;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;

export const StyledSearchIcon = styled(MagnifyingGlassIcon)`
  width: 1.5em;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;
export const StyeldUserIcon = styled(UserIcon)`
  width: 1.5em;
  margin-left: 1rem;
  color: ${(props) => props.theme.color.contrasts.lowestContrast};
`;
