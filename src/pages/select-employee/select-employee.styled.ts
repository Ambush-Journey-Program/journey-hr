import { Badge } from '@/design-system';
import {
  MagnifyingGlassIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import styled from 'styled-components';

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

export const Search = styled.div`
  padding: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #9588a9;
  border-radius: 12px;
`;

export const RelativeDiv = styled.div`
  position: relative;
`;

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
  flex: 6;
`;

export const StyeldIcon = styled(UsersIcon)`
  width: 1.5em;
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

export const StyledBadge = styled(Badge)`
  white-space: nowrap;
`;
