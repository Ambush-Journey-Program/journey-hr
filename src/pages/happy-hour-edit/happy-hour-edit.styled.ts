import { Button } from '@ambush/ui';
import { StyledSelectProps } from '@/design-system/select-input/types';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Header = styled.div`
  margin: 1.25rem 0 1.75rem 0;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 0.375rem;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.spacings.spacing04};
  @media ${devices.tablet}, ${devices.tabletLarge}, ${devices.desktop} {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export const IncreaseButton = styled(Button)`
  margin-top: ${(props) => props.theme.spacings.spacing04};
  &:focus {
    max-height: 80%;
  }

  @media ${devices.tablet} {
    margin-left: ${(props) => props.theme.spacings.spacing04};
    margin-top: ${(props) => props.theme.spacings.spacing02};
  }
`;

export const TextTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.406rem;
  font-family: ${(props) => props.theme.font.fontFamilyTitle};
  color: ${(props) => props.theme.color.contrasts.highContrast};

  @media ${devices.tablet} {
    font-size: 1.25rem;
    line-height: 1.563rem;
  }

  @media ${devices.desktop} {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 1.125rem;

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
