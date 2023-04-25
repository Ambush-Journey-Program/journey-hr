export type Balance = {
  admin: boolean;
};
export type Employees = {
  employee: Profile;
};

export type Profile = {
  value: string;
  label: string;
  avatar: JSX.Element;
};
