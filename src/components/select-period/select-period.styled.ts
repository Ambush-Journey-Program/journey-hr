import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 18.75rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1.5rem;

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Span = styled.span`
  display: block;
  margin-top: 0.25rem;
  line-height: 1.125rem;
  width: 1.125rem;
  height: 1.125rem;
  color: ${(props) => props.theme.color.brandColors.red};
`;
