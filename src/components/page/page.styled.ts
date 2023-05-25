import { CardWrapper } from '@/design-system';
import styled from 'styled-components';

export const pageContainer = styled.div`
  column-gap: 20px;
  display: flex;
  justify-content: left;
  margin: 80px 140px 0px 140px;
  position: relative;
`;

export const menuWrapper = styled(CardWrapper)`
  padding: 0px;
  width: 278px;
  height: 750px;
`;

export const contentBox = styled.div`
  width: 100%;
`;
