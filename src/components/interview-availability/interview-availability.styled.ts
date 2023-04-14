import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const InterviewAvailability = styled.div``;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 1.25rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
  }
`;

export const ContainerBtn = styled.div`
  display: grid;

  @media ${devices.tablet} {
    grid-column: 2;
    justify-content: flex-end;
  }
`;
