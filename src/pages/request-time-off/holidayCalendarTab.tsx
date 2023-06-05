/* eslint-disable react/no-unescaped-entities */
import * as Styled from './pageRequestTimeOff.styled';
import { Balance } from '@/components/balance';
import { Footer } from '../../components/request-time-off/PTO-footer';
import { USHolidays } from '@/components/us-holidays';
import { BrazilianHolidays } from '@/components/brazilian-holidays';

export function RequestTimeOffTab(onView: () => void) {
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

      <Styled.HolidaysWrapper>
        <USHolidays />

        <BrazilianHolidays />
      </Styled.HolidaysWrapper>

      <Footer variant="timeOff" />
    </Styled.SpacingWrapper>
  );
}
