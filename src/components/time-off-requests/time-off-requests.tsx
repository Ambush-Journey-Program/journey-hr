import * as Styled from './time-off-requests.styled';
import { Badge, Paragraph, Subtitle } from '@ambush/ui';
import { TimeOffRequestsProps } from './types';

export function TimeOffRequests({
  title,
  subtitle,
  status,
  appliedOn,
}: TimeOffRequestsProps) {
  return (
    <Styled.RequestsWrapper data-testid="TimeOffRequests">
      <Subtitle children={title} variant="s5" fontWeight="regular" />
      <Paragraph children={subtitle} size="default" fontWeight="hair" />
      <Styled.BadgeWrapper>
        <Badge text={status} />
        <span>{appliedOn}</span>
      </Styled.BadgeWrapper>
    </Styled.RequestsWrapper>
  );
}
