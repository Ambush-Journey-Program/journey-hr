import styled from 'styled-components';

export const ModalLayer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
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
  padding: 20px;
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
    top: 15px;
    padding-top: 1.375rem;
    align-self: flex-end;
    background-color: transparent;

    svg {
      color: ${(props) => props.theme.color.button.secondaryHover};
      width: 1.1875rem;
      height: 1.1875rem;
    }
  }
`;

export const modalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 0;

  > * + * {
    margin-left: 2rem;
  }
`;
