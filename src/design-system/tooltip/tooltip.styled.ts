import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.button`
  border: none;
  background: inherit;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
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
  position: relative;
  background-color: ${(props) => props.theme.color.white};
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 1.25rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.white} transparent transparent
      transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }
`;
