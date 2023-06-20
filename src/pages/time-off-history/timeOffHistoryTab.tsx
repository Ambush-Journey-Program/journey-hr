import { TimeOffRequests } from '@/components/time-off-requests';
import { TimeOffHistoryProps } from './types';

export function TimeOffHistoryTab({ TimeOffRequestList }: TimeOffHistoryProps) {
  return (
    <>
      {TimeOffRequestList.map((request, index) => (
        <TimeOffRequests
          key={index}
          title={request.title}
          subtitle={request.subtitle}
          status={request.status}
          appliedOn={request.date}
        />
      ))}
    </>
  );
}
