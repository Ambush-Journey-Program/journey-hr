import * as Styled from './timeOffRow.styled';

import { Badge } from '@/design-system';
import { TimeOffListProps } from '../types';
import { Paragraph } from '@/design-system/typography/paragraph/paragraph.styled';

export function TimeOffRow({ details }: TimeOffListProps) {
  return (
    <Styled.TimeOffRow key={details.id}>
      <Paragraph size="medium" colorVariant="dark" fontWeight="hair">
        {details.dateRange}
      </Paragraph>
      <Badge text={details.badge} />
    </Styled.TimeOffRow>
  );
}
