import * as Styled from './us-holidays.styled';
import { Paragraph } from '@/design-system';
import { HolidayComponentProps } from './types';

export function HolidayComponent({ label, date }: HolidayComponentProps) {
  return (
    <Styled.StyledDiv>
      <Paragraph size="default" fontWeight="semibold">
        {label}
      </Paragraph>

      <Paragraph size="default" fontWeight="semihair">
        {date}
      </Paragraph>
    </Styled.StyledDiv>
  );
}
