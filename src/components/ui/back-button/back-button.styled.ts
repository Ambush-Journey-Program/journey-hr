import { Button } from '@/design-system';
import styled from 'styled-components';

export const BackBtn = styled(Button)`
  color: ${(props) => props.theme.color.contrasts.lowContrast};
  svg {
    color: ${(props) => props.theme.color.contrasts.lowContrast};
  }

  &:hover {
    color: ${(props) => props.theme.color.contrasts.lowContrast};
    opacity: 70%;
    svg {
      opacity: 70%;
    }
  }

  &:focus {
    color: ${(props) => props.theme.color.contrasts.lowContrast};
    opacity: 70%;
  }
`;
