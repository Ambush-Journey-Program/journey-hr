import { Input } from '@ambush/ui';
import * as Styled from './select-period.styled';
import { useEffect, useState } from 'react';
import * as Icons from '@heroicons/react/24/outline';
import { selectPeriodProps } from './types';

const isFirstDateAfterSecondDate = (firstDate: Date, secondDate: Date) => {
  const firstDateTime = firstDate.getTime();
  const secondDateTime = secondDate.getTime();
  return firstDateTime > secondDateTime;
};

const isStartComeFirstEnd = (date1: Date, date2: Date) => {
  return isFirstDateAfterSecondDate(date1, date2);
};

const isDate15DaysFromNow = (date: Date) => {
  const today = new Date();
  today.setDate(today.getDate() + 14);
  return isFirstDateAfterSecondDate(date, today);
};

const isStartDateOnFuture = (date: Date) => {
  const today = new Date();
  return isFirstDateAfterSecondDate(date, today);
};

export function SelectPeriod({ error = false }: selectPeriodProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');
  const [dateWarn, setDateWarn] = useState('');

  function parseDate(originalDate: string) {
    const [year, month, day] = originalDate.split('-');
    if (
      typeof year === 'undefined' ||
      typeof month === 'undefined' ||
      typeof day === 'undefined'
    ) {
      return null;
    }
    const parsedYear = parseInt(year, 10);
    const indexedMonth = parseInt(month, 10) - 1;
    const parsedDay = parseInt(day, 10);
    if (isNaN(parsedYear) || isNaN(indexedMonth) || isNaN(parsedDay)) {
      return null;
    }

    const date = new Date(parsedYear, indexedMonth, parsedDay);
    return date;
  }

  useEffect(() => {
    const parsedStartDate = parseDate(startDate);
    const parsedEndDate = parseDate(endDate);
    if (!parsedStartDate || !parsedEndDate) {
      if (!parsedStartDate) {
        return;
      }
      if (!parsedEndDate) {
        return;
      }

      return;
    }

    const isStartComeFirst = isStartComeFirstEnd(
      parsedEndDate,
      parsedStartDate,
    );
    const isDay15DaysOnFuture = isDate15DaysFromNow(parsedStartDate);
    const isStartBeOnFuture = isStartDateOnFuture(parsedStartDate);

    if (!isStartComeFirst) {
      setEndDateError('Invalid work day.');
      error = true;
    }
    if (!isDay15DaysOnFuture) {
      setDateWarn(
        'Settings of your Organization mandate you to request this Timeoff at least 14 days before the Date of timeoff request.',
      );
      error = true;
    }
    if (!isStartBeOnFuture) {
      setStartDateError('Invalid work day.');
      error = true;
    }
    error = false;
  }, [endDate, startDate]);

  return (
    <Styled.InputsWrapper>
      <Input
        label="Start Date"
        type="date"
        onTextChange={setStartDate}
        value={startDate}
        error={startDateError}
        warn={dateWarn}
        placeholder="Select Time Off Period"
      />
      <Input
        variant
        label="End Date"
        type="date"
        onTextChange={setEndDate}
        value={endDate}
        error={endDateError}
        placeholder="Select Time Off Period"
      />
      <button type="submit" className="btn btn-primary me-1">
        Submit
      </button>
    </Styled.InputsWrapper>
  );
}
