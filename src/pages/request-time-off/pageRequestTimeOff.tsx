/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import {
  TabContainer,
  Tab,
  TabPanel,
  BackButton,
} from '@ambush/ui';
import { RequestTimeOffTab } from './requestTimeOffTab';
import React from 'react';

export function RequestTimeOff() {
  const [value, setTabIndex] = React.useState(0);
  return (
    <Styled.TimeOffPageHeaderWrapper data-testid="PageRequestTimeOff">
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
        <div></div>
      </TabPanel>
    </Styled.TimeOffPageHeaderWrapper>
  );
}
