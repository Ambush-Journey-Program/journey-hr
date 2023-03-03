import * as Styled from './tooltip.styled';
import { ITooltipProps } from './types';

export function Tooltip({
  text,
  children,
  variantPosition = 'top',
}: ITooltipProps) {
  return (
    <Styled.TooltipWrapper>
      {children}

      <Styled.TooltipBox variantPosition={variantPosition}>
        {text}
      </Styled.TooltipBox>
    </Styled.TooltipWrapper>
  );
}
