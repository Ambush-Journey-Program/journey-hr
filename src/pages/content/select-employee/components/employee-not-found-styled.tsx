import { spacings } from '@/styles/spacing';
import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 519px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacings.spacing02};
`;
