/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import { Balance } from '@/components/balance';
import { Footer } from '../../components/footer';
import { USHolidays } from '@/components/us-holidays';
import { BrazilianHolidays } from '@/components/brazilian-holidays';
import { RequestTimeOffProps } from './types';

export function HolidayCalendarTab(
  variant: RequestTimeOffProps,
  onView: () => void,
) {
  return (
    <Styled.SpacingContainer>
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

      <Styled.HolidaysContainer>
        <USHolidays />

        <BrazilianHolidays />
      </Styled.HolidaysContainer>

      <Footer variant="confirm" />
    </Styled.SpacingContainer>
  );
}
