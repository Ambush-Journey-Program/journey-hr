/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import { TabContainer, Tab, TabPanel } from '@ambush/ui';
import { BackButton } from '@ambush/components';
import React from 'react';
import { RequestTimeOffTab } from './requestTimeOffTab';
import { HolidayCalendarTab } from './holidayCalendarTab';

export function RequestTimeOff() {
  const [value, setTabIndex] = React.useState(0);
  return (
    <Styled.TimeOffPageHeaderContainer data-testid="PageRequestTimeOff">
      <BackButton onClick={function (): void {}} />

      <TabContainer value={value} onChange={setTabIndex}>
        <Tab label="Time Off" icon="ClockIcon" fontWeight="semibold" />

        <Tab
          label="Holiday Calendar"
          icon="CalendarIcon"
          fontWeight="semibold"
        />
      </TabContainer>
      <TabPanel index={0} value={value}>
        <RequestTimeOffTab />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <HolidayCalendarTab />
      </TabPanel>
    </Styled.TimeOffPageHeaderContainer>
  );
}
