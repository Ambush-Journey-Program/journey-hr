type RequestTimeOff = {
  id: string;
  period: string;
  summary: string;
};

export const requestTimeOffmock: RequestTimeOff[] = [
  {
    id: `1`,
    period: 'Nov 01 Wed - Nov 15 Wed , 2023',
    summary: '06 Recharge Days, 1 US Holidays, 1 Optional Holidays',
  },
  {
    id: `2`,
    period: 'Jan 01 Mon - Jan 15 Mon, 2024',
    summary: '06 Recharge Days, 6 US Holidays, 4 Optional Holidays',
  },
];
