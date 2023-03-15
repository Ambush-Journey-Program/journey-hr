type Interview = {
  title: string;
  interviewerName: string;
  interviewTime: string;
};

export type Interviews = {
  option: number;
  interviewList: Interview[];
};

export type ScheduleCardProps = {
  interviews: Interviews[];
};
