import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;
  @media ${devices.mobile} {
    gap: 14px;
  }
`;

export const SummaryWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
  gap: 24px;
  width: 100%;
  max-width: 100%;

  @media ${devices.tablet} {
    gap: 121px;
  }

  @media ${devices.mobile} {
    gap: 14px;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  gap: 6px;
  @media ${devices.tablet} {
    gap: 4px;
  }
`;

export const PeriodContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media ${devices.mobile} {
    gap: 6px;
  }
`;

export const ListComponent = styled.li`
  display: flex;
  align-items: center;
  gap: 212px;
  @media ${devices.tablet} {
    gap: 121px;
  }

  @media ${devices.mobile} {
    gap: 14px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
