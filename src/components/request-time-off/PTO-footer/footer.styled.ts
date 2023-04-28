import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  & .border {
    margin: 2px;
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
`;

export const FooterCotainer = styled.div`
  justify-content: flex-end;
  align-items: center;
  padding: 40px;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex-direction: row;
  width: 866px;
  & .border {
    margin: 2px;
    height: 0.5px;
    width: 100%;
    background-color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
`;
