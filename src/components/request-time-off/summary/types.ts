type UserType = 'employee' | 'manager';

export type SummaryProps = {
  onDelete?: () => void;
  onEdit?: () => void;
  variant: UserType;
};
