import * as Styled from './time-off-requests.styled';
import { Badge, Subtitle, Title } from '@/design-system';
import { TimeOffRequestsProps } from './types';

export function TimeOffRequests({
  title,
  subtitle,
  status,
  appliedOn,
}: TimeOffRequestsProps) {
  return (
    <Styled.RequestsWrapper data-testid="TimeOffRequests">
      <Title children={title} variant="h6" />
      <Subtitle children={subtitle} variant="s6" fontWeight="hair" />
      <Styled.BadgeWrapper>
        <Badge text={status} />
        <span>{appliedOn}</span>
      </Styled.BadgeWrapper>
    </Styled.RequestsWrapper>
  );
}
