import * as Styled from './tooltip.styled';
import { ITooltipProps } from './types';

export function Tooltip({ text, children, position = 'top' }: ITooltipProps) {
  return (
    <Styled.TooltipWrapper data-testid="tooltipWrapper">
      {children}

      <Styled.TooltipBox position={position} data-testid="tooltipText">
        {text}
      </Styled.TooltipBox>
    </Styled.TooltipWrapper>
  );
}
