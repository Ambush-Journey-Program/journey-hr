import { CardWrapper } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs, Title } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';

export function HappyHourEdit({ guests, totalGuests }: HappyHourEditProps) {
  return (
    <CardWrapper>
      <Styled.ContainerTitle>
        <Title variant="h5">Group Names</Title>
      </Styled.ContainerTitle>
      <Styled.ContainerTitle>
        <Paragraphs fontWeight={'semihair'} size={'medium'} colorVariant="dark">
          ({guests.length}/{totalGuests})People
        </Paragraphs>
      </Styled.ContainerTitle>
    </CardWrapper>
  );
}
