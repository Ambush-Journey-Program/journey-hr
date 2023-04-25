export type Balance = {
  admin: boolean;
};
export type Employees = {
  [x: string]: ReactNode;
  employee: Profile;
};

export type Profile = {
  value: string;
  label: string;
  avatar: JSX.Element;
};
