import * as Styled from './holidayRow.styled';

import { Subtitle } from '@/design-system';
import { HolidaysListProps } from '../types';
import { Paragraph } from '@/design-system/typography/paragraphs/paragraphs.styled';

export function HolidayRow({ details }: HolidaysListProps) {
  return (
    <Styled.HolidayRow key={details.id}>
      <Subtitle variant="s4" fontWeight="regular">
        {details.name}
      </Subtitle>
      <Paragraph size="medium" colorVariant="dark" fontWeight="hair">
        {details.date}
      </Paragraph>
    </Styled.HolidayRow>
  );
}
