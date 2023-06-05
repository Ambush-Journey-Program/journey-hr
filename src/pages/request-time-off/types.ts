type UserType = 'employee' | 'manager';

export type RequestTimeOffProps = {
  onView?: () => void;
  variant?: UserType;
};
