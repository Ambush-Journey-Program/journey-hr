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
  }
`;

export const BackButtonBox = styled.div`
  padding-left: 0;
  margin-bottom: ${(props) => props.theme.spacings.spacing03};
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.spacings.spacing05};
  @media ${devices.tablet} {
    flex-direction: row;
    margin-top: 0rem;
    bottom: ${(props) => props.theme.spacings.spacing06};
    position: relative;
    justify-content: flex-end;
  }
`;
