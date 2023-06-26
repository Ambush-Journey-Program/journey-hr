import styled from 'styled-components';

export const ModalLayer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(231 222 209 / 50%);
  z-index: 100;
  border: none;
`;

export const ModalScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  background-size: cover;
  padding: 1.25rem;
`;

export const ModalBox = styled.div`
  min-width: 30rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding-top: 5.6875rem;
  padding-bottom: 3.0625rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  background-color: ${(props) => props.theme.color.auxiliary.white};
  border-radius: 1.5625rem;

  .closeButton {
    position: absolute;
    top: ${(props) => props.theme.spacings.spacing04};
    padding-top: 1.375rem;
    align-self: flex-end;
    background-color: transparent;

    svg {
      color: ${(props) => props.theme.color.button.secondaryHover};
      width: 1.1875rem;
      height: 1.187rem;
    }
  }
`;

export const modalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    padding-bottom: ${(props) => props.theme.spacings.spacing04};
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacings.spacing06};
  padding-top: 0;

  > * + * {
    margin-left: ${(props) => props.theme.spacings.spacing06};
  }
`;
