import { Button } from '@/design-system';
import styled from 'styled-components';

export const GuestListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 7px 4px;
`;

export const ListComponent = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  padding: 7px;
`;

export const TrashIconButton = styled(Button)`
  display: flex;
  width: 1rem;
  padding: 0;
  svg {
    margin-right: 0;
  }
`;

export const UserContainer = styled.span`
  display: flex;
  align-items: baseline;
  gap: 17px;
`;
