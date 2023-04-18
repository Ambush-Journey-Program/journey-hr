import * as Styled from './guest-list.styled';
import { Paragraphs, Badge, Button } from '@ambush/ui';
import { type GuestListProps } from './types';
import { ReactComponent as UserIcon } from './userIcon.svg';

export function GuestList({ guestsList, onDelete }: GuestListProps) {
  return (
    <Styled.GuestListWrapper data-testid="GuestList">
      {guestsList.map((guestsList, index) => (
        <Styled.ListComponent key={index}>
          <Styled.UserContainer>
            <UserIcon />
            <Paragraphs size="large" fontWeight="semibold">
              {guestsList.guest.name}
            </Paragraphs>

            <Badge text={guestsList.guest.team} />
          </Styled.UserContainer>

          <Button
            icon="TrashIcon"
            color="defaultColor"
            variant="ghost"
            onClick={onDelete}
            aria-label="Delete Button"
          />
        </Styled.ListComponent>
      ))}
    </Styled.GuestListWrapper>
  );
}
