import { CheckBox } from '@/design-system/checkbox/checkbox';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.color.contrasts.lightContrast};
  border-radius: 10px;
  width: 100%;
  padding: 40px;
`;

export const CheckboxDiv = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
