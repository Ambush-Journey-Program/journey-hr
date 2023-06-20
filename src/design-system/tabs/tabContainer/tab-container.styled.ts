import styled, { css } from 'styled-components';

type buttonTabProps = {
  isActive: boolean;
};

export const Wrapper = styled.div`
  display: flex;
`;

export const Underline = styled.div`
  top: -0.188rem;
  position: relative;
  border-bottom: solid 0.25rem ${(props) => props.theme.color.button.secondary};
  border-radius: 0.125rem;
  z-index: 1;
`;

const activeTab = css`
  p {
    font-weight: 500;
  }
`;

export const buttonTab = styled.div<buttonTabProps>`
  background-color: transparent;
  width: 100%;

  ${({ isActive }) => isActive && activeTab}
`;
