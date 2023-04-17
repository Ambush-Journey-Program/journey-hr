import { Button } from '@/design-system';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Header = styled.div`
  margin: 20px 0px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 6px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  @media ${devices.tablet}, ${devices.tabletLarge}, ${devices.desktop} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const BoxButton = styled(Button)`
  margin-left: 24px;
`;
export const TextTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 22.5px;
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  color: ${(props) => props.theme.color.contrasts.highContrast};

  @media ${devices.tablet}, ${devices.tabletLarge} {
    font-size: 20px;
    line-height: 25px;
  }
  @media ${devices.desktop} {
    font-size: 24px;
    line-height: 30px;
  }
`;
