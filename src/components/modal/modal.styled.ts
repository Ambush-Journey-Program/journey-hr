import styled from 'styled-components';

export const ModalLayer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(20, 20, 20, 0.5);
  z-index: 100;
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
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  background-color: ${(props) => props.theme.color.auxiliary.white};
  border-radius: 1.5625rem;

  .closeButton {
    padding-top: 1.375rem;
    align-self: flex-end;
    background-color: transparent;

    svg {
      color: ${(props) => props.theme.color.button.secondaryHover};
      width: 0.873125rem;
      height: 0.873125rem;
    }
  }

  .title {
    padding-top: 1.4375rem;
    padding-bottom: 1rem;
  }
`;

export const ModalChildren = styled.div`
  line-height: 27px;
  padding: 0 2.6875rem;
  text-align: center;
`;

export const ModalButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  padding-top: 0;
  padding-bottom: 3.0625rem;

  > * + * {
    margin-left: 2rem;
  }
`;
