import { CardWrapper } from '@ambush/ui';
import styled from 'styled-components';

export const pageContainer = styled.div`
  column-gap: ${(props) => props.theme.spacings.spacing05};
  display: flex;
  margin: 5rem 8.75rem 0;
  position: relative;
`;

export const menuWrapper = styled(CardWrapper)`
  padding: 0;
  width: 17.375rem;
  height: 46.875rem;
`;

export const contentBox = styled.div`
  width: 100%;
`;
