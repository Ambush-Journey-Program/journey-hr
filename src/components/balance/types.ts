export type Employees = Employee[];

export type Employee = {
  value: string;
  label: string;
  avatar: string;
};

export type BalanceProps = {
  buttonClick?: () => void;
  buttonText?: string;
  employees?: Employees;
  currentUser: boolean;
};
