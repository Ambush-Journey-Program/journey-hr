import * as Styled from './tooltip.styled';
import { ITooltipProps } from './types';

export function Tooltip({ text, children, position = 'top' }: ITooltipProps) {
  return (
    <Styled.TooltipWrapper data-testId="tooltipWrapper">
      {children}

      <Styled.TooltipBox position={position}>
        <div>{text}</div>
      </Styled.TooltipBox>
    </Styled.TooltipWrapper>
  );
}
