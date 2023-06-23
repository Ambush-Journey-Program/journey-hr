import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CheckboxDiv = styled.div`
  margin-top: ${(props) => props.theme.spacings.spacing06};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing04};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing02};
`;
