import { Input } from '@ambush/ui';
import * as Styled from './select-period.styled';
import { useEffect, useState } from 'react';

const isFirstDateAfterSecondDate = (firstDate: Date, secondDate: Date) => {
  const firstDateTime = firstDate.getTime;
  const secondDateTime = secondDate.getTime;
  return firstDateTime > secondDateTime;
};

const isStartDateOnFuture = (date: Date) => {
  const today = new Date();
  return isFirstDateAfterSecondDate(date, today);
};

const isStartComeFirstEnd = (date1: Date, date2: Date) => {
  return isFirstDateAfterSecondDate(date1, date2);
};

// const isDateOnPast = (date: Date) => {
//   const today = new Date();
//   return isFirstDateAfterSecondDate(today, date);
// };

const isDate15DaysFromNow = (date: Date) => {
  const today = new Date();
  today.setDate(today.getDate() + 15);
  return isFirstDateAfterSecondDate(today, date);
};

export function SelectPeriod() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDateError, setStartDateError] = useState('');
  const [endDateError, setEndDateError] = useState('');

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
        // setStartDateError('Invalid date Format');
        return;
      }
      if (!parsedEndDate) {
        return;
        // setEndDateError('Invalid date Format');
      }

      return;
    }

    const isStartBeOnFuture = isStartDateOnFuture(parsedStartDate);
    const isStartComeFirst = isStartComeFirstEnd(
      parsedEndDate,
      parsedStartDate,
    );
    // const isEndDateOnPast = isDateOnPast(parsedEndDate);
    const isDay15DaysOnFuture = isDate15DaysFromNow(parsedStartDate);

    if (isStartBeOnFuture) {
      setEndDateError('impossible start date on past');
    }
    if (isDay15DaysOnFuture) {
      setEndDateError('it is necessary to request 15 days in advance');
    }
    if (isStartComeFirst) {
      setEndDateError('it is necessary change the start day or the end day');
    }

    setStartDateError('');
    setEndDateError('');
  }, [endDate, startDate]);

  return (
    <Styled.InputsWrapper>
      <Input
        label="Start Date"
        type="date"
        onTextChange={setStartDate}
        value={startDate}
        error={startDateError}
        placeholder="Select Time Off Period"
      />
      <Input
        label={'End Date'}
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
