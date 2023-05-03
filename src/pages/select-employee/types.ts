export type SelectEmployeeProps = {
  results?: Employees[];
};

export type Employee = {
  id: string;
  name: string;
  team: string;
};
export type Employees = Employee[];
