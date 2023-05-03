import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};

  @media ${devices.desktop} {
    padding-bottom: 1.25rem;
  }
`;

export const ContainerNumber = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.125rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.406rem;
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  color: ${(props) => props.theme.color.contrasts.highContrast};

  @media ${devices.tabletLarge}, ${devices.desktop} {
    font-size: 1.25rem;
    line-height: 1.563rem;
  }
`;

export const Guests = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0.375rem;

  li {
    padding-bottom: 0.25rem;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.688rem;
    word-break: break-word;
    font-family: ${(props) => props.theme.font.fontFamilyBody};
    color: ${(props) => props.theme.color.contrasts.mediumContrast};
  }
  @media ${devices.tablet}, ${devices.tabletLarge}, ${devices.desktop} {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.938rem;
  }
`;
