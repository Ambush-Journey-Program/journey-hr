import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacings.spacing02};
  margin: ${(props) => props.theme.spacings.spacing04} 0 ${(props) => props.theme.spacings.spacing08} 0;
`;

export const IconContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin:${(props) => props.theme.spacings.spacing04} 0 ${(props) => props.theme.spacings.spacing04} 0;
`;