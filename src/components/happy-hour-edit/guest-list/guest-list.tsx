import * as Styled from './guest-list.styled';
import { Paragraph, Badge, Button } from '@ambush/ui';
import { GuestListProps } from './types';
import { ReactComponent as UserIcon } from './userIcon.svg';

export function GuestList({ guestsList, onDelete }: GuestListProps) {
  return (
    <Styled.GuestListWrapper data-testid="GuestList">
      {guestsList.map((item) => (
        <Styled.ListComponent key={item.guest.id}>
          <Styled.UserContainer>
            <UserIcon />
            <Styled.ContainerProfile>
              <Paragraph size="large" fontWeight="semibold">
                {item.guest.name}
              </Paragraph>
              <Badge text={item.guest.team} />
            </Styled.ContainerProfile>
          </Styled.UserContainer>

          <Button
            variant="ghost"
            icon="TrashIcon"
            color="alternative"
            onClick={() => onDelete && onDelete(item.guest.id)}
            aria-label="Delete Button"
          />
        </Styled.ListComponent>
      ))}
    </Styled.GuestListWrapper>
  );
}
