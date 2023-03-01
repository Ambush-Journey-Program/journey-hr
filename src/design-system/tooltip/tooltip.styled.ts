import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 50%;
  margin-left: 50%;
  cursor: pointer;
  box-sizing: border-box;
  &:hover span {
    visibility: visible;
  }
`;

export const CenterContainer = styled.div`
  position: absolute;
  width: 12.5rem;
  margin-left: -6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 0.313rem);
  pointer-events: none;
`;

export const TooltipBox = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme.color.strongWhite};
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
    border-color: ${(props) => props.theme.color.strongWhite} transparent
      transparent transparent;
    left: calc(50% - 0.5rem);
    top: 100%;
  }
`;
