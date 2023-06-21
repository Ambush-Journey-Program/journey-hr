import { Button } from '@/design-system';
import styled from 'styled-components';

export const BackBtn = styled(Button)`
  width: max-content;
  color: ${(props) => props.theme.color.contrasts.lowContrast};

  svg {
    color: ${(props) => props.theme.color.contrasts.lowContrast};
  }

  &:hover {
    color: ${(props) => props.theme.color.contrasts.lowContrast};
    opacity: 0.7;

    svg {
      opacity: 0.7;
    }
  }

  &:focus {
    color: ${(props) => props.theme.color.contrasts.lowContrast};
    opacity: 0.7;
  }
`;
