import * as Styled from './tooltip.styled';

export function Tooltip({ text, children }) {
  return (
    <Styled.TooltipWrapper>
      {children}
      <Styled.CenterContainer>
        <Styled.TooltipBox>{text}</Styled.TooltipBox>
      </Styled.CenterContainer>
    </Styled.TooltipWrapper>
  );
}
