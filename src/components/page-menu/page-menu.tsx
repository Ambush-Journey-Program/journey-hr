import { Button, Logo, Paragraph } from '@/design-system';
import { MenuItem } from './';
import * as Styled from './page-menu.styled';

export function PageMenu() {
  return (
    <Styled.Menu>
      <Styled.LogoContainer>
        <Logo colorVariant="dark" variant="horizontal"></Logo>
      </Styled.LogoContainer>
      <Styled.UserContainer>
        <Paragraph size="small" fontWeight="hair">
          Welcome back,
        </Paragraph>
        <Paragraph size="large" fontWeight="semibold">
          Nicoli Rodrigues
        </Paragraph>
      </Styled.UserContainer>
      <Styled.ListLink>
        <MenuItem icon="UsersIcon">Interviews</MenuItem>
        <MenuItem icon="SparklesIcon">Happy Hour</MenuItem>
        <MenuItem icon="ClockIcon">Time Off</MenuItem>
        <MenuItem icon="InboxIcon">Inbox</MenuItem>
        <MenuItem icon="FaceSmileIcon">Feedbacks</MenuItem>
        <MenuItem icon="EnvelopeIcon">Send an Invite</MenuItem>
        <MenuItem icon="LinkIcon">Shorty</MenuItem>
      </Styled.ListLink>
      <Styled.ButtonContainer>
        <Button
          icon="ArrowRightOnRectangleIcon"
          color="alternative"
          variant="ghost"
        >
          Sign Out
        </Button>
      </Styled.ButtonContainer>
    </Styled.Menu>
  );
}
