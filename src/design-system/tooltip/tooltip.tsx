import { Children, useRef, useState } from 'react';
import * as Styled from './tooltip.styled';
import { ITooltipProps } from './types';

export function Tooltip({ text, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef(null);
  return (
    <Styled.TooltipWrapper>
      <Styled.TooltipTarget>{children}</Styled.TooltipTarget>
    </Styled.TooltipWrapper>
  );
}
