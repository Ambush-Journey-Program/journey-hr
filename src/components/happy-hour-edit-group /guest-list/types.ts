export type InterviewTimesProps = {
  interviewOptions: InterviewOption[];
  onClick: () => void;
};

export type GuestName = {
  [key: string]: FlattenSimpleInterpolation;
};
