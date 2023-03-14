type Option = {
  label: string;
  value: string;
};
export type IInterviewAvailabilityProps = {
  title?: string;
  options?: Option[];
  required: true;
};
