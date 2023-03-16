type Schedule = {
  title: string;
  interviewerName: string;
  scheduleTime: string;
};

export type InterviewOption = {
  Schedules: Schedule[];
};

export type InterviewTimesProps = {
  interviewOptions: InterviewOption[];
  onClick: () => void;
};

export type ScheduleCardProps = {
  interviews: InterviewOption;
  index: number;
  onClick: () => void;
};
