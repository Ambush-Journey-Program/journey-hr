import { Title } from '@ambush/ui';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const TimeOffPageHeaderContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.spacing07};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing04};
`;

export const HolidaysContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacings.spacing04};
`;

export const SpacingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.spacings.spacing07};
  gap: ${(props) => props.theme.spacings.spacing07};

  @media ${devices.mobile} {
    gap: ${(props) => props.theme.spacings.spacing05};
  }
`;

export const TimeOffTitle = styled(Title)`
  margin-bottom: ${(props) => props.theme.spacings.spacing05};
`;
