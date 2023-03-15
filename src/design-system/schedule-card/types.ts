type Interview = {
  title: string;
  interviewerName: string;
  interviewTime: string;
};

export type Interviews = {
  interviewList: Interview[];
};

export type ScheduleCardProps = {
  interviews: Interviews[];
};
