import * as Styled from './guest-list.styled';
import { LinksProps, NavBarProps } from './type';
import { ListComponent } from './list-component';

export function GuestList({ navigationLinks }: NavBarProps & LinksProps) {
  return (
    <Styled.GuestListWrapper data-testid="GuestList">
      <ListComponent />
    </Styled.GuestListWrapper>
  );
}
