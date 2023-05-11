import { TabPanelProps } from './types';

export function TabPanel({ index, value, children }: TabPanelProps) {
  return index === value ? <div>{children}</div> : null;
}
