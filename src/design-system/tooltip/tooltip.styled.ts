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
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;
`;

export const TooltipBox = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme.color.strongWhite};
  color: ${(props) => props.theme.color.purple};
  text-align: center;
  border-radius: 15px;
  padding: 12px;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: calc(100% + 12px);
  min-width: 100px;
  max-width: 200px;
  font-weight: 600;
  font-size: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
  visibility: hidden;

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    border-width: 8px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.strongWhite} transparent
      transparent transparent;
    left: calc(50% - 8px);
    top: 100%;
  }
`;
