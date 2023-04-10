import { Button, SelectInput } from '@/design-system';
import { devices } from '@/styles/devices';
import styled from 'styled-components';
import { IHappyHourScheduleProps } from './types';

export const select = styled(SelectInput)<IHappyHourScheduleProps>``;

export const MainWrapper = styled.div`
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
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 24px;

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const wrapper = styled.div``;

export const StyledButton = styled(Button)`
  float: right;

  @media ${devices.mobile} {
    width: 100%;
  }
`;
