import {
  findToday,
  isDate15DaysFromNow,
  isFirstDateAfterSecondDate,
  isWeekEnd,
  parseDate,
} from './utils';

describe('isWeekEnd', () => {
  it('return False if it is weekend', () => {
    function isWeekend(day = new Date()) {
      return day.getDay() === 6 || day.getDay() === 5;
    }
    const weekend = new Date('2023-05-21');
    expect(!isWeekend(weekend)).toBeFalsy();
  });
  it('return True if it is work day', () => {
    function isWeekend(day = new Date()) {
        return day.getDay() === 6 || day.getDay() === 5;
      }
    const weekend = new Date('2023-05-22');
    expect(!isWeekend(weekend)).toBeTruthy();
  });
});

describe('parseDate', () => {
  it('return date', () => {
    const startDay = '2023-05-17';
    const stringDate = parseDate(startDay) as Date;
    expect(stringDate).not.toBeNull();
    expect(stringDate).not.toBeUndefined();
  });
  it('returns a today date formated as yyyy-mm-dd', () => {
    const today = findToday();
    expect(today).toMatch(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
  });
});

describe('isDate15DaysFromNow', () => {
  it('should Date be 15 Days From Now', () => {
    const today = new Date();
    const futureDays = today.setDate(today.getDate() + 15);
    const stringDate = new Date(futureDays);
    const previousDays = isDate15DaysFromNow(stringDate);
    expect(previousDays).toBeTruthy();
  });
  it('should Date be last then 15 Days From Now', () => {
    const today = new Date();
    const futureDays = today.setDate(today.getDate() + 10);
    const stringDate = new Date(futureDays);
    const previousDays = isDate15DaysFromNow(stringDate);
    expect(previousDays).toBeFalsy();
  });
});
describe('isFirstDateAfterSecondDate', () => {
  it('returns true when StartDate come after EndDate', () => {
    const startDay = '2023-08-17';
    const endDay = '2023-07-18';
    const firstDate = parseDate(startDay) as Date;
    const secondDate = parseDate(endDay) as Date;
    const previousDays = isFirstDateAfterSecondDate(firstDate, secondDate);
    expect(previousDays).toBeTruthy();
  });
  it('returns false when StartDate come before EndDate', () => {
    const startDay = '2023-06-17';
    const endDay = '2023-07-18';
    const firstDate = parseDate(startDay) as Date;
    const secondDate = parseDate(endDay) as Date;
    const previousDays = isFirstDateAfterSecondDate(firstDate, secondDate);
    expect(previousDays).toBeFalsy();
  });
});
