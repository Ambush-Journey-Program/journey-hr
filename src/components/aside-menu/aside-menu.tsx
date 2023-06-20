import { Button, Logo, Paragraph } from "@ambush/ui";
import { MenuItem } from ".";
import * as Styled from "./aside-menu.styled";

export function AsideMenu() {
  return (
    <Styled.Menu data-testid="Menu">
      <Styled.LogoContainer>
        <Logo colorVariant="dark" logoVariation="horizontal" />
      </Styled.LogoContainer>
      <Styled.UserContainer>
        <Paragraph size="large" fontWeight="light">
          Welcome back,
        </Paragraph>
        <Paragraph size="large" fontWeight="semibold">
          Nicoli Rodrigues
        </Paragraph>
      </Styled.UserContainer>

      <Styled.ListLink>
        <MenuItem url="/Interviews" icon="UsersIcon">
          Interviews
        </MenuItem>
        <MenuItem url="/HappyHour" icon="SparklesIcon">
          Happy Hour
        </MenuItem>
        <MenuItem url="/time-off" icon="ClockIcon">
          Time Off
        </MenuItem>
        <MenuItem url="/Inbox" icon="InboxIcon">
          Inbox
        </MenuItem>
        <MenuItem url="/Feedbacks" icon="FaceSmileIcon">
          Feedbacks
        </MenuItem>
        <MenuItem url="/SendInvite" icon="EnvelopeIcon">
          Send an Invite
        </MenuItem>
        <MenuItem url="/Shorty" icon="LinkIcon">
          Shorty
        </MenuItem>
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
