import styled from 'styled-components';

export const InterviewTimesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: ${(props) => props.theme.spacings.spacing04};

  div {
    padding: 0;
  }
`;
