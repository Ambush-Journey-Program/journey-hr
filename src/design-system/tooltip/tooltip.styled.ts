import styled, { css } from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 10%;
  margin-left: 10%;
  cursor: pointer;
  box-sizing: border-box;

  &:hover > span {
    display: block;
  }
`;
export type StyledProps = {
  position: string;
};

export const TooltipBox = styled.span<StyledProps>`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.purple};
  text-align: center;
  border-radius: 0.938rem;
  padding: 0.75rem;
  min-width: 6.25rem;
  max-width: 12.5rem;
  font-weight: 600;
  font-size: 0.75rem;
  box-shadow: 0 0.25rem 0.875rem rgba(0, 0, 0, 0.15),
    0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  display: none;

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
          transform: translateY(-50%);
          top: 50%;
          right: calc(100% + 15px);
          &:after {
            border-color: transparent transparent transparent #${(props) => props.theme.color.white};
            left: calc(100% + -1.5px);
            top: calc(50% + -0.5rem);
            transform: rotate(-90deg);
          }
        `;
      case 'right':
        return css`
          top: 50%;
          transform: translateY(-50%);
          left: calc(100% + 15px);
          z-index: 10;

          &:after {
            border-color: transparent #${(props) => props.theme.color.white} transparent
              transparent;
            right: calc(100% + -1.5px);
            left: unset;
            top: calc(50% - 0.5rem);
            transform: rotate(90deg);
          }
        `;

      case 'bottom':
        return css`
          top: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%);
          &:after {
            border-color: transparent transparent #${(props) =>
                props.theme.color.white} transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 0.5rem);
            transform: rotate(180deg);
          }
        `;

      case 'top':
        return css`
          bottom: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return css``;
    }
  }}
`;
