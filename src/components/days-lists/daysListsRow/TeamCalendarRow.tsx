import * as Styled from './teamCalendarRow.styled';

import { Badge, Subtitle } from '@/design-system';
import { TeamCalendarListProps } from '../types';
import { Paragraph } from '@/design-system/typography/paragraph/paragraph.styled';

export function TeamCalendarRow ({ details }: TeamCalendarListProps) {
  return (
    <Styled.TeamCalendarRow key={details.id}>
      <Subtitle variant="s4" fontWeight="regular">
        {details.name}
      </Subtitle>
      <Styled.DateValidation>
        <Paragraph size="medium" colorVariant="dark" fontWeight="hair">
          {details.dateRange}
        </Paragraph>
        <Badge text={details.badge} />
      </Styled.DateValidation>
    </Styled.TeamCalendarRow>
  );
}
