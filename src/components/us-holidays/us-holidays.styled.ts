import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HolidaysDiv = styled.div`
  margin-top: ${(props) => props.theme.spacings.spacing08};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing04};
  align-items: flex-start;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing02};
`;
