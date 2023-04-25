import { DaysListsProps } from './types';

export function DaysLists({ list, renderRow }: DaysListsProps) {
  return <ul>{list.map((details) => renderRow(details))}</ul>;
}
