export type Employees = Employee[];

export type Employee = {
  value: string;
  label: string;
  avatar: string | null;
};

export type BalanceProps = {
  buttonClick?: () => void;
  buttonText?: string;
  employees?: Employees;
  isAdmin: boolean;
  availableDays: number;
  consumedDays: number;
  nextRefill?: string;
  optionalHolidays: number;
  title: string;
};
