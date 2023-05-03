import { Button } from '@/design-system';
import styled from 'styled-components';

export const BackBtn = styled(Button)`
  color: ${(props) => props.theme.color.contrasts.lowContrast};
  &:hover {
    opacity: 70%;
  }
`;
