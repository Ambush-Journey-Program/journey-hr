import { Input } from '@ambush/ui';
import * as Styled from './select-period.styled';
import { useEffect, useState } from 'react';

import {
  findToday,
  isDate15DaysFromNow,
  isFirstDateAfterSecondDate,
  isWeekEnd,
  parseDate,
} from './utils';

const messageErrors = {
  INVALID_DATE: 'Invalid work day.',
  NOT_15_DAYS_LATER:
    'Settings of your Organization mandate you to request this Timeoff at least 14 days before the Date of timeoff request.',
  WEEKEND: 'It`s weekend',
};

const today = findToday();
export function SelectPeriod() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');

  useEffect(() => {
    if (!startDate) return;

    const parsedStartDate = parseDate(startDate) as Date;
    if (!isDate15DaysFromNow(parsedStartDate)) {
      setStartDateError(messageErrors.NOT_15_DAYS_LATER);
      return;
    }

    if (isWeekEnd(parsedStartDate.getDay())) {
      setStartDateError(messageErrors.WEEKEND);
      return;
    }
    setStartDateError('');
  }, [startDate]);

  useEffect(() => {
    if (!endDate) return;
    const parsedEndDate = parseDate(endDate) as Date;
    if (isWeekEnd(parsedEndDate.getDay())) {
      setEndDateError(messageErrors.INVALID_DATE);
      return;
    }
    setEndDateError('');
  }, [endDate]);

  useEffect(() => {
    if (!startDate || !endDate) return;
    const parsedStartDate = parseDate(startDate) as Date;
    const parsedEndDate = parseDate(endDate) as Date;

    if (isFirstDateAfterSecondDate(parsedStartDate, parsedEndDate)) {
      setEndDateError('Invalid work day.');
      return;
    }

    setEndDateError('');
  }, [startDate, endDate]);

  return (
    <Styled.InputsWrapper>
      <Input
        label="Start Date"
        type="date"
        onTextChange={setStartDate}
        value={startDate}
        error={startDateError}
        hasIconRight
        iconLeft="CalendarIcon"
        right={!startDateError && startDate}
        min={today}
      />
      <Input
        label="End Date"
        type="date"
        onTextChange={setEndDate}
        value={endDate}
        error={endDateError}
        hasIconRight
        iconLeft="CalendarIcon"
        right={!endDateError && endDate}
        min={today}
      />
    </Styled.InputsWrapper>
  );
}