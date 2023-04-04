import { ListProps } from './type';
import * as Styled from './guest-list.styled';
import { Paragraphs, Badge } from '@/design-system';
import { TrashIcon, UserIcon } from '@heroicons/react/24/solid';
import { Button } from '../../../design-system/button/button';
// <GuestName />

export function ListComponent({
  navigationLinks,
  colors = 'light',
}: ListProps) {
  return (
    <Styled.ListComponent>
      <UserIcon />
      <Paragraphs size={'large'} fontWeight={'semibold'}>
        Lucas Medeiros
      </Paragraphs>
      <Badge text={'Dev Team'} />
      <Button variant="ghost">
        <TrashIcon />
      </Button>
    </Styled.ListComponent>
  );
}
