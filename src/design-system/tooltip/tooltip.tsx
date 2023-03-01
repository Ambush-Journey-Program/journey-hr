import * as Styled from './tooltip.styled';
import { ITooltipProps } from './types';

export function Tooltip({ text, children, position }: ITooltipProps) {
  return (
    <Styled.TooltipWrapper>
      {children}
      <Styled.CenterContainer position={position}>
        <Styled.TooltipBox position={position}>
          <div>{text}</div>
        </Styled.TooltipBox>
      </Styled.CenterContainer>
    </Styled.TooltipWrapper>
  );
}
