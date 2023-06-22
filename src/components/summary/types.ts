type UserType = 'employee' | 'manager';

export type SummaryProps = {
  editBtn?: JSX.Element;
  variant: UserType;
  onDelete?: () => void;
  onEdit?: () => void;
  display?:boolean;
};
