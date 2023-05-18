export function isFirstDateAfterSecondDate(firstDate: Date, secondDate: Date) {
  const firstDateTime = firstDate.getTime();
  const secondDateTime = secondDate.getTime();
  return firstDateTime > secondDateTime;
}

export function isDate15DaysFromNow(date: Date) {
  const today = new Date();
  today.setDate(today.getDate() + 14);
  return isFirstDateAfterSecondDate(date, today);
}

export function findToday() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const dayString = day < 10 ? `0${day}` : day;
  const monthString = month < 10 ? `0${month}` : month;

  return `${year}-${monthString}-${dayString}`;
}

export function parseDate(originalDate: string) {
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

export function isWeekEnd(day: number) {
  return [0, 6].includes(day);
}
