import styled, { css } from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 10%;
  margin-left: 10%;
  cursor: pointer;
  box-sizing: border-box;
  &:hover span {
    visibility: visible;
  }
`;
export type StyledProps = {
  position: string;
};

export const CenterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          top: calc(100% + 5px);
        `;
      case 'left':
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
          transform: translate(-50%, -50%);
        `;
      case 'right':
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

export const TooltipBox = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.purple};
  text-align: center;
  border-radius: 0.938rem;
  padding: 0.75rem;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: calc(100% + 0.75rem);
  min-width: 6.25rem;
  max-width: 12.5rem;
  font-weight: 600;
  font-size: 0.75rem;
  box-shadow: 0 0.25rem 0.875rem rgba(0, 0, 0, 0.15),
    0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  visibility: hidden;

  &:after {
    content: '';
    position: absolute;
    width: 0.063rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: ${(props) => props.theme.color.white} transparent transparent
      transparent;
    left: calc(50% - 0.5rem);
    top: 100%;
  }

  ${({ position }) => {
    switch (position) {
      case 'left':
        return css`
          transform: translate(-100%, 50%);
          &:after {
            position: absolute;
            width: 0.063rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent transparent transparent #${(props) => props.theme.color.white};
            left: 99.75%;
            top: calc(50% - 0.5rem);
            transform: rotate(-90deg);
          }
        `;
      case 'right':
        return css`
          transform: translate(0, 50%);
          &:after {
            position: absolute;
            width: 0.063rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent #${(props) => props.theme.color.white} transparent
              transparent;
            right: 99.75%;
            left: unset;
            top: calc(50% - 0.5rem);
            transform: rotate(90deg);
          }
        `;

      case 'bottom':
        return css`
          bottom: calc(100% + -3.25rem);
          &:after {
            position: absolute;
            width: 0.063rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent transparent #${(props) =>
                props.theme.color.white} transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 0.5rem);
            transform: rotate(180deg);
          }
        `;
      default:
        return css``;
    }
  }}
`;
