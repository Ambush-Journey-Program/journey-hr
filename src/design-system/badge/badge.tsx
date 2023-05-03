import { Paragraphs } from '../typography/paragraphs/paragraphs';
import * as Styled from './badge.styled';
import { IBadgeProps } from './types';
export function Badge({ text }: IBadgeProps) {
  return (
    <Styled.badge data-testid="test">
      <Paragraphs size="extrasmall" fontWeight={'semibold'}>
        {text}
      </Paragraphs>
    </Styled.badge>
  );
}
