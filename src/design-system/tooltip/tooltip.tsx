import { useState } from 'react';
import * as Styled from './tooltip.styled';
import { type ITooltipProps } from './types';

export function Tooltip({
  text,
  children,
  variantPosition = 'top',
}: ITooltipProps) {
  const [visible, setVisible] = useState(false);

  function changeVisible() {
    if (visible) {
      setVisible(false);
      return;
    }
    setVisible(true);
  }

  return (
    <Styled.TooltipWrapper
      data-testid="wrapper"
      onMouseOver={changeVisible}
      onMouseLeave={changeVisible}
    >
      {children}
      {visible && (
        <Styled.TooltipBox
          data-testid="popUp"
          variantPosition={variantPosition}
        >
          {text}
        </Styled.TooltipBox>
      )}
    </Styled.TooltipWrapper>
  );
}
