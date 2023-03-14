import styled from 'styled-components';

export const InterviewAvailability = styled.div`
  align-items: flex-start;
  justify-content: start;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 125%;
  color: ${(props) => props.theme.color.purple};
`;

export const Subtitle = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.color.veryDarkPurple};
`;
