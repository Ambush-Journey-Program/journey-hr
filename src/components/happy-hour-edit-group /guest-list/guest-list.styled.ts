import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { UserIcon, TrashIcon } from '@heroicons/react/24/solid';

export const GuestListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

export const ListComponent = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

export const TrashIconButton = styled.button`
  display: flex;
  width: 1rem;
`;
