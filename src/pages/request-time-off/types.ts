type UserType = 'employee' | 'manager';

export type RequestTimeOffProps = {
  onView?: (value: string) => void;
  variant?: UserType;
};
