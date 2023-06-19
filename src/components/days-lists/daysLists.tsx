import { Button, Title } from '@/design-system';
import * as Styled from './daysLists.styled';
import { DaysListsProps } from './types';

export function DaysLists({
  title,
  buttonTitle,
  list,
  renderRow,
}: DaysListsProps) {
  return (
    <Styled.ListWrapper data-testid={title}>
      <Title variant="h5">{title}</Title>
      {list.map((details) => renderRow(details))}
      <Button variant="ghost">{buttonTitle}</Button>
    </Styled.ListWrapper>
  );
}
