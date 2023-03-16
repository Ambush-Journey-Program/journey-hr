type Interview = {
  title: string;
  interviewerName: string;
  interviewTime: string;
};

export type Interviews = {
  interviewList: Interview[];
};

export type InterviewTimesProps = {
  interviewsList: Interviews[];
  onClick: () => void;
};

export type ScheduleCardProps = {
  interviews: Interviews;
  index: number;
  onClick: () => void;
};
