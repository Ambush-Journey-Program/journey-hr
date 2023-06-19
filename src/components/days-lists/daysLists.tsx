import { Title } from '@ambush/ui';
import * as Styled from './daysLists.styled';

import Link from 'next/link';

import { DaysListsProps } from './types';

export function DaysLists({
  title,
  buttonTitle,
  list,
  url,
  renderRow,
}: DaysListsProps) {
  return (
    <Styled.ListWrapper data-testid={title}>
      <Title variant="h5">{title}</Title>
      {list.map((details) => renderRow(details))}
      <Link href={url}>{buttonTitle}</Link>
    </Styled.ListWrapper>
  );
}
