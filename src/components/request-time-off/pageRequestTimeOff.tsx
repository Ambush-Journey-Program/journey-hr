/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import { Button, CardWrapper, TabContainer } from '@/design-system';
import { Balance } from '../balance';
import { TimeOffType } from '../time-off-type';
import { Summary } from './summary/summary';
import { Footer } from './PTO-footer';
import { Tab } from '@/design-system/tabs/tab';
import { TabPanel } from '@/design-system/tabs/tabPanel';
import { OptionalHolidays } from '../optional-holidays';
import { SelectPeriod } from '../select-period';
import { RequestTimeOffProps } from './types';

export function PageRequestTimeOff({ onView }: RequestTimeOffProps) {
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
          <Styled.SpacingWrapper>
            <div>
              <Styled.TimeOffTitle variant="h6">
                Request Employee's Time Off
              </Styled.TimeOffTitle>

              <Balance
                isAdmin={true}
                availableDays={20}
                buttonClick={onView}
                buttonText="View Time Off"
              />
            </div>

            <div>
              <SelectPeriod />

              <Button
                sizeVariant="small"
                color="alternative"
                variant="ghost"
                icon="PlusIcon"
              >
                Add a Period
              </Button>
            </div>

            <TimeOffType />

            <OptionalHolidays />

            <Summary variant="employee" />

            <Footer variant="timeOff" />
          </Styled.SpacingWrapper>
        </TabPanel>
        <TabPanel index={1} value={1}>
          <div></div>
        </TabPanel>
      </Styled.TimeOffPageHeaderWrapper>
    </CardWrapper>
  );
}
