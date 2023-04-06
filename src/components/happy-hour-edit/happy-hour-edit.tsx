import { Button, CardWrapper, Input } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs, Title } from '@/design-system/typography';
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
          <Button variant="ghost" icon="PlusIcon">
            <Paragraphs
              fontWeight={'semibold'}
              size={'default'}
              colorVariant="purple"
            >
              Add Name
            </Paragraphs>
          </Button>
        </Styled.ContainerInput>
      </Styled.Header>
    </CardWrapper>
  );
}
