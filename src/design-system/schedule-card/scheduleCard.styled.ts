import styled from 'styled-components';

export const scheduleCardWrapper = styled.div`
  width: 276px;

  div {
    padding: 0;
  }
`;

export const scheduleCardList = styled.ul`
  padding: 24px;
  text-align: center;

  h2 {
    color: ${(props) => props.theme.color.veryDarkPurple};
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    padding-bottom: 24px;
  }

  li {
    padding-bottom: 24px;

    h3 {
      color: ${(props) => props.theme.color.veryDarkPurple};
      font-size: 20px;
      font-weight: 700;
      line-height: 125%;
      padding-bottom: 8px;
    }

    p {
      color: ${(props) => props.theme.color.lightPurple};
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
    }
  }

  button {
    margin: 0 auto;
  }
`;
