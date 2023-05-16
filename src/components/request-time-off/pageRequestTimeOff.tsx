/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import { Button, CardWrapper, Title } from '@/design-system';
import { Balance } from '../balance';
import { DaysLists } from '../days-lists';
import {
  HolidaysList,
  TimeOffList,
  TeamCalendarList,
} from '../days-lists/types';
import { TimeOffType } from '../time-off-type';
import { Summary } from './summary/summary';
import { Footer } from './PTO-footer';
import { Tabs } from '@/design-system/tabs/tabs';
import { TabContainer } from '@/design-system/tabs/tabContainer';

export function PageRequestTimeOff() {
  return (
    <><CardWrapper>
      <Styled.TimeOffPageHeaderWrapper data-testid="PageTimeOff">
        <TabContainer value={2} ><Tabs label="Time Off"
        icon="AcademicCapIcon"
        fontWeight="light"
        labelSize="default"/>, <Tabs label="Time Off"
        icon="AcademicCapIcon"
        fontWeight="light"
        labelSize="default"/></TabContainer>
        <Button
          sizeVariant="small"
          color="secondary"
          variant="ghost"
          icon="ChevronLeftIcon"
        >
        Back
      </Button><Title variant={'h6'}>Request Employee's Time Off</Title><Balance isAdmin={false} availableDays={0} /><Styled.SelectPeriodProp /><Button
        sizeVariant="small"
        color="alternative"
        variant="ghost"
        icon="PlusIcon"
      >
        Add a Period
      </Button><TimeOffType /><DaysLists
        title="Holidays Calendar"
        buttonTitle="View Holidays calendar"
        storyType="holidays"
        list={[]}
        renderRow={function (
          details: HolidaysList | TimeOffList | TeamCalendarList
        ): JSX.Element {
          throw new Error('Function not implemented.');
        } } /><Summary variant={'employee'} /><Footer variant="timeOff" /></>
      </Styled.TimeOffPageHeaderWrapper>
    </CardWrapper>
  );
}
