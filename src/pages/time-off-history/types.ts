export type TimeOffHistoryProps = {
  TimeOffRequestList: TimeOffRequest[];
};

export type TimeOffRequest = {
  title: string;
  subtitle: string;
  status: 'Approved' | 'Denied';
  date: string;
};
