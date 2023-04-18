import { Paragraph } from '../typography/paragraphs/paragraphs.styled';
import * as Styled from './short-appointment.styled';
import { type ShortHappyHourProps } from './types';

export function ShortHappyHour({ appointment, date }: ShortHappyHourProps) {
  return (
    <Styled.Wrapper>
      <Styled.ContainerName>
        <Paragraph fontWeight={'semihair'} size={'small'} colorVariant="dark">
          Name of the event
        </Paragraph>
        <Styled.ContainerAppointment>{appointment}</Styled.ContainerAppointment>
      </Styled.ContainerName>
      <div>
        <Paragraph fontWeight={'semihair'} size={'small'} colorVariant="dark">
          Date:
        </Paragraph>
        <Styled.ContainerDate>{date}</Styled.ContainerDate>
      </div>
    </Styled.Wrapper>
  );
}
