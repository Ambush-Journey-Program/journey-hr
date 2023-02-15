import styled from 'styled-components';

export const Wrapper = styled.div`
  select:first-child {
    color: gray;
  }
  margin-left: 40%;
`;

export const Select = styled.select`
  display: flex;
  align-items: center;
  width: 391px;
  height: 52px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: ${(props) => props.theme.color.purple};
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 12px;
  padding-left: 20px;
  margin-top: 4px;
  & .option {
    background-color: red;
  }
`;

export const Option = styled.option`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 12px;

  position: relative;
  width: 391px;
  height: 304px;
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(149, 136, 169, 0.05),
    0px 0px 30px rgba(231, 222, 209, 0.5);
  border-radius: 10px;
`;
