export type SelectEmployeeProps = {
  error?: string
  currentUser?: string;
  employees: Employees;
};

export type Employee = {
  id: string;
  name: string;
  team: string;
};
export type Employees = Employee[];

export type SearchRowProps = {
  employee: Employee;
};
