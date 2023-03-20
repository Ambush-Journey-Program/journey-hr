import styled from 'styled-components';

export const InterviewAvailability = styled.div``;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 125%;
  color: ${(props) => props.theme.color.contrasts.highContrast};
`;

export const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 150%;
  color: ${(props) => props.theme.color.contrasts.mediumContrast};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 1.25rem;
`;

export const ContainerBtn = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;
