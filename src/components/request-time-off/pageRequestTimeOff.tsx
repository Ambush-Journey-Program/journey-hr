/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import { CardWrapper, TabContainer, Tab, TabPanel } from '@/design-system';
import { RequestTimeOffTab } from './requestTimeOffTab';

export function RequestTimeOffContent() {
  return (
    <CardWrapper>
      <Styled.TimeOffPageHeaderWrapper data-testid="PageRequestTimeOff">
        <Styled.BackButton
          sizeVariant="small"
          color="secondary"
          variant="ghost"
          icon="ChevronLeftIcon"
        >
          Back
        </Styled.BackButton>

        <TabContainer value={0}>
          <Tab label="Time Off" icon="ClockIcon" fontWeight="semibold" />

          <Tab
            label="Holiday Calendar"
            icon="CalendarIcon"
            fontWeight="semibold"
          />
        </TabContainer>
        <TabPanel index={0} value={0}>
          <RequestTimeOffTab />
        </TabPanel>
        <TabPanel index={1} value={1}>
          <div></div>
        </TabPanel>
      </Styled.TimeOffPageHeaderWrapper>
    </CardWrapper>
  );
}
