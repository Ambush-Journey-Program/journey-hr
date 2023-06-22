import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacings.spacing01};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${(props) => props.theme.spacings.spacing03};
  margin-top: ${(props) => props.theme.spacings.spacing06};
  margin-bottom: 1.25rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
    column-gap: 2.5rem;
  }
`;

export const ContainerBtn = styled.div`
  display: grid;

  @media ${devices.tablet} {
    grid-column: 2;
    justify-content: flex-end;
  }
`;
