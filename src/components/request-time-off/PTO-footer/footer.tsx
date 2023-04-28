/* eslint-disable react/no-children-prop */
import { Button } from '@ambush/ui';
import { FooterProps } from './types';
import * as Styled from './footer.styled';

export function Footer({ Cancel, Apply }: FooterProps) {
  return (
    <Styled.Wrapper data-testid="footer">
      <span className="border"></span>
      <Styled.FooterCotainer>
        <Button onClick={Cancel}>Cancel</Button>
        <Button onClick={Apply}>Apply Time Off</Button>
      </Styled.FooterCotainer>
    </Styled.Wrapper>
  );
}
