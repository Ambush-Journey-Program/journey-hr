import * as Styled from './tooltip.styled';
import { ITooltipProps } from './types';

export function Tooltip({
  text,
  children,
  variantPosition = 'top',
}: ITooltipProps) {
  return (
    <Styled.TooltipWrapper data-testid="wrapper">
      {children}
      <Styled.TooltipBox data-testid="popUp" variantPosition={variantPosition}>
        {text}
      </Styled.TooltipBox>
    </Styled.TooltipWrapper>
  );
}
