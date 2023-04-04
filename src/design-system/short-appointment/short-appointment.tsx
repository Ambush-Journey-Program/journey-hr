import { Paragraph } from '../typography/paragraphs/paragraphs.styled';
import * as Styled from './short-appointment.styled';
import { ShortHappyHourProps } from './types';

export function ShortHappyHour({ Appointment, Date }: ShortHappyHourProps) {
  return (
    <Styled.Wrapper>
      <Styled.ContainerName>
        <Paragraph fontWeight={'semihair'} size={'small'} colorVariant="dark">
          Name of the event
        </Paragraph>
        <Styled.ContainerAppointment>{Appointment}</Styled.ContainerAppointment>
      </Styled.ContainerName>
      <div>
        <Paragraph fontWeight={'semihair'} size={'small'} colorVariant="dark">
          Date:
        </Paragraph>
        <Styled.ContainerDate>{Date}</Styled.ContainerDate>
      </div>
    </Styled.Wrapper>
  );
}
