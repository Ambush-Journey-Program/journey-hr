/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import {
  CardWrapper,
  TabContainer,
  Tab,
  TabPanel,
  BackButton,
} from '@ambush/ui';
import { RequestTimeOffTab } from './requestTimeOffTab';
import React from 'react';
import { HappyHourEdit } from '../happy-hour-edit';
import { EMPLOYEES } from '../happy-hour-edit/const';

export function RequestTimeOffContent() {
  const [value, setTabIndex] = React.useState(0);
  return (
    <CardWrapper>
      <Styled.TimeOffPageHeaderWrapper data-testid="PageRequestTimeOff">
        <BackButton />

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
          <HappyHourEdit guestsListData={EMPLOYEES} />
        </TabPanel>
      </Styled.TimeOffPageHeaderWrapper>
    </CardWrapper>
  );
}
