import { Paragraph } from '../typography/paragraph/paragraph';
import * as Styled from './badge.styled';
import { IBadgeProps } from './types';
export function Badge({ text }: IBadgeProps) {
  return (
    <Styled.badge data-testid="test">
      <Paragraph size="extrasmall" fontWeight={'semibold'}>
        {text}
      </Paragraph>
    </Styled.badge>
  );
}
