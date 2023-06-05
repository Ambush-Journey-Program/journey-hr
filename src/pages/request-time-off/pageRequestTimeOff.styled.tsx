import { Title } from '@ambush/ui';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const TimeOffPageHeaderWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing04};
`;

export const HolidaysWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacings.spacing04};
`;

export const SpacingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing07};

  @media ${devices.tablet} {
    gap: ${(props) => props.theme.spacings.spacing06};
  }

  @media ${devices.mobile} {
    gap: ${(props) => props.theme.spacings.spacing05};
  }
`;

export const TimeOffTitle = styled(Title)`
  margin-bottom: ${(props) => props.theme.spacings.spacing05};
`;
