import { Input } from '@ambush/ui';
import * as Styled from './select-period.styled';
import { useEffect, useState } from 'react';

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

function findToday() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const dayString = day < 10 ? `0${day}` : day;
  const monthString = month < 10 ? `0${month}` : month;

  return `${year}-${monthString}-${dayString}`;
}
const today = findToday();

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

function isWeekEnd(day: number) {
  return [0, 6].includes(day);
}

export function SelectPeriod() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [startDateError, setStartDateError] = useState('');
  // const [dateWarn, setDateWarn] = useState('');

  const [endDateError, setEndDateError] = useState('');

  const isCorrect = !startDateError && !endDateError && !!startDate;

  useEffect(() => {
    if (!startDate) return;

    const parsedStartDate = parseDate(startDate) as Date;
    if (!isDate15DaysFromNow(parsedStartDate)) {
      setStartDateError(
        'Settings of your Organization mandate you to request this Timeoff at least 14 days before the Date of timeoff request.'
      );
      return;
    }

    if (isWeekEnd(parsedStartDate.getDay())) {
      setStartDateError('It`s weekend');
      return;
    }
    setStartDateError('');
  }, [startDate]);

  useEffect(() => {
    if (!endDate) return;
    const parsedEndDate = parseDate(endDate) as Date;
    if (isWeekEnd(parsedEndDate.getDay())) {
      setEndDateError('It`s weekend');
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

  useEffect(() => {
    const parsedStartDate = parseDate(startDate);
    const parsedEndDate = parseDate(endDate);
    if (!parsedStartDate || !parsedEndDate) {
      return;
    }

    const isStartComeFirst = isStartComeFirstEnd(
      parsedEndDate,
      parsedStartDate,
    );
    const isDay15DaysOnFuture = isDate15DaysFromNow(parsedStartDate);
    if (!isStartComeFirst || !isDay15DaysOnFuture) {
      if (!isStartComeFirst) {
        setEndDateError('Invalid work day.');
      }
      if (!isDay15DaysOnFuture) {
        // setDateWarn(
        //   'Settings of your Organization mandate you to request this Timeoff at least 14 days before the Date of timeoff request.',
        // );
      }
      return;
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
        right={isCorrect}
        min={today}
      />
      <Input
        label="End Date"
        type="date"
        onTextChange={setEndDate}
        value={endDate}
        error={endDateError}
        right={isCorrect}
        min={today}
      />
    </Styled.InputsWrapper>
  );
}
