import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  @media ${devices.tablet} {
    position: absolute;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    display: block;
    flex-direction: row;
  }
`;

export const BackButtonBox = styled.div`
  padding-left: 0;
  margin-bottom: 12px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    margin-top: 0px;
    bottom: 28px;
    position: relative;
    justify-content: flex-end;
  }
`;
