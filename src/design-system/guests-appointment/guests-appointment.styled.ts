import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  border-radius: 0.625rem;
  width: 100%;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};

  @media ${devices.tabletLarge}, ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.desktop} {
    padding-bottom: 1.25rem;
  }
`;

export const ContainerName = styled.div`
  word-break: break-word;
`;

export const ContainerNumber = styled.div`
  margin-top: 0.375rem;
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
  margin-top: 0.375rem;
  li {
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.688rem;
    font-family: ${(props) => props.theme.font.fontFamilyBody};
    color: ${(props) => props.theme.color.contrasts.mediumContrast};
  }

  @media ${devices.desktop} {
    li {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }
`;
