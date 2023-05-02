import { devices } from '@/styles/devices';
import styled from 'styled-components';
import { selectPeriodProps } from './types';
import { Input } from '@/design-system';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 24px;

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Span = styled.span<selectPeriodProps>`
  display: block;
  margin-top: 0.25rem;
  line-height: 1.125rem;
  width: 1.125rem;
  height: 1.125rem;
  color: ${(props) => props.theme.color.brandColors.red};
`;

export const InputStyle = styled(Input)``;
