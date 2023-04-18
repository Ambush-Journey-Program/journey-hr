interface Schedule {
  title: string;
  interviewerName: string;
  scheduleTime: string;
}

export interface InterviewOption {
  id: number;
  schedules: Schedule[];
}

export interface InterviewTimesProps {
  interviewOptions: InterviewOption[];
  onClick: () => void;
}

export interface ScheduleCardProps {
  interviews: InterviewOption;
  index: number;
  onClick: () => void;
}
