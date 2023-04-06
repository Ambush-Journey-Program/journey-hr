import { SelectInput } from '@/design-system';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const select = styled(SelectInput)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media ${devices.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 24px;
  }
`;
