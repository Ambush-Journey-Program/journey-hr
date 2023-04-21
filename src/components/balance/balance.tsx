import { Paragraphs, Subtitle } from '@/design-system';
import * as Styled from './balance.styled';

export function Balance() {
  return (
    <Styled.Wrapper>
      <Styled.Div>
        <Subtitle variant="s6" fontWeight="regular">
          Recharge Days
        </Subtitle>
        <Paragraphs size="extralarge" fontWeight="semibold">
          20 days available
        </Paragraphs>
      </Styled.Div>
      <Styled.Div>
        <Subtitle variant="s6" fontWeight="regular">
          Consumed
        </Subtitle>
        <Paragraphs size="extralarge" fontWeight="semibold">
          0 days
        </Paragraphs>
      </Styled.Div>
      <Styled.Div>
        <Subtitle variant="s6" fontWeight="regular">
          Next Refill
        </Subtitle>
        <Paragraphs size="extralarge" fontWeight="semibold">
          Mar 24, 2024
        </Paragraphs>
      </Styled.Div>
      <Styled.VeticalLine></Styled.VeticalLine>
      <Styled.Div>
        <Subtitle variant="s6" fontWeight="regular">
          Optional Holidays
        </Subtitle>

        <Paragraphs size="extralarge" fontWeight="semibold">
          0/4 used
        </Paragraphs>
      </Styled.Div>
    </Styled.Wrapper>
  );
}
