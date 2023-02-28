import * as Styled from './tooltip.styled';

export function Tooltip({ text, children }) {
  return (
    <Styled.TooltipWrapper>
      {children}
      <Styled.TooltipBox>
        <div>{text}</div>
      </Styled.TooltipBox>
    </Styled.TooltipWrapper>
  );
}
