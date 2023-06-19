import { Title } from '@ambush/ui';
import * as Styled from './daysLists.styled';
<<<<<<< HEAD

import Link from 'next/link';

=======
>>>>>>> main
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
