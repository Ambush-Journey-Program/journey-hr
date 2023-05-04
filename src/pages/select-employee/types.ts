export type SelectEmployeeProps = {
  error?: string | null;
};

export type Employee = {
  id: string;
  name: string;
  team: string;
};
export type Employees = Employee[];
export type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;
