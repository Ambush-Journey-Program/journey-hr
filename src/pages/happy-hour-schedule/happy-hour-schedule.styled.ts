import { Button, SelectInput } from '@ambush/ui';
import { BackButton } from '@/components';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing06};
  padding: 2.5rem;
`;

export const InputsWrapper = styled.div`
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing05};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: ${(props) => props.theme.spacings.spacing05};

  @media ${devices.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledButton = styled(Button)`
  float: right;

  @media ${devices.mobile} {
    width: 100%;
  }
`;

export const StyledBackButton = styled(BackButton)`
  padding-left: 0;
  margin-bottom: ${(props) => props.theme.spacings.spacing03};
`;
