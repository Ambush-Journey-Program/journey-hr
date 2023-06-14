import { Paragraph } from '@/design-system';
import * as Styled from './short-appointment.styled';
import { ShortHappyHourProps } from './types';

export function ShortHappyHour ({ appointment, date }: ShortHappyHourProps) {
  return (
    <Styled.Wrapper>
      <Styled.ContainerName>
        <Paragraph fontWeight="hair" size="small" colorVariant="dark">
          Name of the event
        </Paragraph>
        <Styled.ContainerAppointment>{appointment}</Styled.ContainerAppointment>
      </Styled.ContainerName>
      <div>
        <Paragraph fontWeight="hair" size="small" colorVariant="dark">
          Date:
        </Paragraph>
        <Styled.ContainerDate>{date}</Styled.ContainerDate>
      </div>
    </Styled.Wrapper>
  );
}
