export type TabContainerProps = {
  value: number;
  children: React.ReactNode[];
  onChange: (index: number) => void;
};
