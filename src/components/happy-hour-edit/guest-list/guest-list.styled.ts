import { Badge, Button } from '@/design-system';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const GuestListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 7px 4px;
  margin-top: 46px;
`;

export const UserContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 17px;
  @media ${devices.tablet}, ${devices.tabletLarge}, ${devices.desktop} {
    align-items: baseline;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 17px;
  }
`;

export const ListComponent = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  padding: 11px;
  @media ${devices.tablet} {
    padding: 7px;
  }
`;
