import * as Styled from './tooltip.styled';
import { ITooltipProps } from './types';

export function Tooltip({ text, children, position }: ITooltipProps) {
  return (
    <Styled.TooltipWrapper>
      {children}
      <Styled.CenterContainer>
        <Styled.TooltipBox>{text}</Styled.TooltipBox>
      </Styled.CenterContainer>
    </Styled.TooltipWrapper>
  );
}
