/* eslint-disable react/no-unescaped-entities */

import { TimeOffRequests } from '@/components/time-off-requests';

export function TimeOffHistoryTab() {
  return (
    <div>
      <TimeOffRequests
        title="Nov 01 Wed - Nov 30 Thu, 2023"
        subtitle="Includes: 18 Recharge Days, 2 US Holidays, 2 Optional Holidays"
        status="Approved"
        appliedOn="Applied 28 days ago"
      />
      <TimeOffRequests
        title="Dec 02 Thu, 2023 - Dec 06 Mon, 2023"
        subtitle="Includes: 4 Recharge Days"
        status="Denied"
        appliedOn="Applied on Jan 02, 2023"
      />
      <TimeOffRequests
        title="Dec 25 Thu, 2023 - Jan 02 Wed, 2024"
        subtitle="12 Recharge Days, 2 US Holidays"
        status="Denied"
        appliedOn="Applied on Mar 02, 2023"
      />
    </div>
  );
}
