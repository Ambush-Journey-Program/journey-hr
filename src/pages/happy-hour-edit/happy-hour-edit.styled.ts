import { Button } from '@ambush/ui';
import { StyledSelectProps } from '@/design-system/select-input/types';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Header = styled.div`
  margin: 20px 0 28px;
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

export const IncreaseButton = styled(Button)`
  margin-top: 16px;

  &:focus {
    max-height: 80%;
  }

  @media ${devices.tablet} {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const TextTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 22.5px;
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  color: ${(props) => props.theme.color.contrasts.highContrast};

  @media ${devices.tablet} {
    font-size: 20px;
    line-height: 25px;
  }

  @media ${devices.desktop} {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 18px;

  @media ${devices.tablet} {
    display: flex;
    width: auto;
    justify-content: flex-end;
  }
`;

export const ScheduleButton = styled(Button)`
  @media ${devices.mobile} {
    width: 100%;
  }
`;

export const SpanError = styled.span`
  display: block;
  margin-top: 0.25rem;
  line-height: 1.125rem;
`;

export const Select = styled.select<StyledSelectProps>`
  &:focus-within {
    outline: none;
    box-shadow: 0 0 0.125rem
      ${(props) => props.theme.color.contrasts.mediumContrast};
    border: 0.063rem solid ${(props) => props.theme.color.brandColors.purple};
  }
`;
