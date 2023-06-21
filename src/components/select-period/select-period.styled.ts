import styled from 'styled-components';

export const InputsWrapper = styled.div`
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5rem;
  font-family: 'Mundial', sans-serif;
`;
export const Span = styled.span`
  display: block;
  margin-top: 0.25rem;
  line-height: 1.125rem;
  width: 1.125rem;
  height: 1.125rem;
  font-family: 'Mundial', sans-serif;
  color: ${(props) => props.theme.color.brandColors.red};
`;
