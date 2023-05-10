export type TabContainerProps = {
  selected: boolean;
  value: number;
  children: React.ReactNode[];
  onChange: (index: number) => void;
};
