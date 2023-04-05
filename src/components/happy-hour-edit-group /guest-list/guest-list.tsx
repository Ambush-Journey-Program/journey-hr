import * as Styled from './guest-list.styled';
import { Paragraphs, Badge, Button } from '@/design-system';
import { UserIcon, TrashIcon } from '@heroicons/react/24/solid';
import { GuestListProps } from './types';

export function GuestList({ guestList, onDelete }: GuestListProps) {
  return (
    <Styled.GuestListWrapper data-testid="GuestList">
      {guestList.map((list, index) => (
        <Styled.ListComponent key={index}>
          <UserIcon />
          <Paragraphs size={'large'} fontWeight={'semibold'}>
            {list.guest.name}
          </Paragraphs>
          <Badge text={list.guest.team} />
          <Button className="TrashButton" icon="TrashIcon" onClick={onDelete} />
        </Styled.ListComponent>
      ))}
    </Styled.GuestListWrapper>
  );
}
