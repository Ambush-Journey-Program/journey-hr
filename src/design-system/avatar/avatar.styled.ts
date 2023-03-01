import styled from 'styled-components';
import { devices } from '../../styles/theme';

export const Image = styled.img`
  height: 7rem;
  width: 7rem;
  border-radius: 7rem;

  @media ${devices.mobile} {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
