import {
  findToday,
  isFirstDateAfterSecondDate,
  isWeekEnd,
  parseDate,
} from './utils';

describe('isWeekEnd', () => {
  it('return true if it is weekend', () => {
    const day = new Date('2023-05-21');
    const weekend = isWeekEnd(day.getDay());
    expect(weekend).toBeTruthy();
  });
  it('return false if it is work day', () => {
    const day = new Date('2023-05-20');
    const weekend = isWeekEnd(day.getDay());
    expect(weekend).toBeFalsy();
  });
});

describe('parseDate', () => {
  it('return date', () => {
    const startDay = '2023-05-17';
    const stringDate = parseDate(startDay) as Date;
    expect(stringDate).not.toBeNull();
    expect(stringDate).not.toBeUndefined();
  });
  it('findToday', () => {
    const today = findToday();
    expect(today).toBeDefined();
  });
});

describe('Error date', () => {
  it('isDate15DaysFromNow', () => {
    const today = new Date();
    const futureDays = today.setDate(today.getDate() + 14);
    const stringDate = futureDays as Date;
    const previousDays = isFirstDateAfterSecondDate(stringDate, today);
    expect(previousDays).toBeTruthy();
  });
  it('isFirstDateAfterSecondDate', () => {
    const startDay = '2023-08-17';
    const endDay = '2023-07-18';
    const firstDate = parseDate(startDay) as Date;
    const secondDate = parseDate(endDay) as Date;
    const previousDays = isFirstDateAfterSecondDate(firstDate, secondDate);
    expect(previousDays).toBeDefined();
  });
});
