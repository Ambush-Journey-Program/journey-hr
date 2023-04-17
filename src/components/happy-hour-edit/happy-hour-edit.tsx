import { Button, CardWrapper, Input } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';

export function HappyHourEdit({ guests, totalGuests }: HappyHourEditProps) {
  return (
    <CardWrapper>
      <Styled.Header>
        <Styled.ContainerTitle>
          <Styled.TextTitle>Group Names</Styled.TextTitle>
        </Styled.ContainerTitle>
        <Styled.ContainerTitle>
          <Paragraphs
            fontWeight={'semihair'}
            size={'medium'}
            colorVariant="dark"
          >
            ({guests.length}/{totalGuests}) People
          </Paragraphs>
        </Styled.ContainerTitle>
        <Styled.ContainerInput>
          <Input type="text"></Input>
          <Styled.BoxButton variant="ghost2" icon="PlusIcon" color="purple">
            Add Name
          </Styled.BoxButton>
        </Styled.ContainerInput>
      </Styled.Header>
    </CardWrapper>
  );
}
