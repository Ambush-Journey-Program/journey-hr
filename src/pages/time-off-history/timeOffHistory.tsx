import * as Styled from './timeOffHistory.styled';
import { PageHeader } from '@/components/page-header';
import { BackButton, Button, Tab, TabContainer, TabPanel } from '@ambush/ui';
import { Balance } from '@/components/balance';
import { useState } from 'react';
import { TimeOffHistoryTab } from './timeOffHistoryTab';

export function TimeOffHistory() {
  const [value, setTabIndex] = useState(0);

  return (
    <div data-testid="TimeOffHistory">
      <PageHeader
        title="Time Off History"
        subtitle="See all Time Off Requests"
        button={<Button>Apply Time Off</Button>}
        backButton={<BackButton onClick={() => {}} />}
      />
      <Balance
        isAdmin={true}
        availableDays={20}
        consumedDays={0}
        optionalHolidays={0}
        nextRefill="Mar 24, 2024"
      />
      <Styled.TabBox>
        <TabContainer value={value} onChange={setTabIndex}>
          <Tab label="Upcoming Requests" fontWeight="light" />

          <Tab label="Past Requests" fontWeight="light" />
        </TabContainer>
        <TabPanel index={0} value={value}>
          <div></div>
        </TabPanel>
        <TabPanel index={1} value={value} data-testid="TabPanel">
          <TimeOffHistoryTab />
        </TabPanel>
      </Styled.TabBox>
    </div>
  );
}