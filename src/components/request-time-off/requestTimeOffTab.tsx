/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import { Button } from '@ambush/ui';
import { Balance } from '@/components/balance';
import { TimeOffType } from '@/components/time-off-type';
import { Summary } from './summary/summary';
import { Footer } from './footer';
import { OptionalHolidays } from '@/components/optional-holidays';
import { SelectPeriod } from '@/components/select-period';
import { RequestTimeOffProps } from './types';

export function RequestTimeOffTab(
  variant: RequestTimeOffProps,
  onView: () => void,
) {
  return (
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
          consumedDays={0}
          optionalHolidays={0}
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
  );
}
