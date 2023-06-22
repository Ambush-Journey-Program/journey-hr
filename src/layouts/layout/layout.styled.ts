import { CardWrapper } from '@ambush/ui';
import styled from 'styled-components';

export const pageContainer = styled.div`
  column-gap: ${(props) => props.theme.spacings.spacing05};
  display: flex;
  margin: 5rem 8.75rem 0;
  position: relative;
`;

export const menuWrapper = styled.div`
  box-shadow: ${(props) => props.theme.shadows.cream};
  background-color: ${(props) => props.theme.color.auxiliary.white};
  border-radius: 1.25rem;
  max-width: 100%;
  padding: ${(props) => props.theme.spacings.spacing01};
  width: 17.375rem;
  height: 46.875rem;
`;

export const contentBox = styled.div`
  width: 100%;
`;
