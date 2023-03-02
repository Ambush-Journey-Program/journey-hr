import * as Styled from './tooltip.styled';
import { ITooltipProps } from './types';

export function Tooltip({
  text,
  children,
  variantPosition = 'top',
}: ITooltipProps) {
  return (
    <Styled.TooltipWrapper data-testid="tooltipWrapper">
      {children}

      <Styled.TooltipBox
        variantPosition={variantPosition}
        data-testid="tooltipText"
      >
        {text}
      </Styled.TooltipBox>
    </Styled.TooltipWrapper>
  );
}
