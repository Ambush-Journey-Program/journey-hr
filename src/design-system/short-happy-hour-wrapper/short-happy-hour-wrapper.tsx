import { Paragraph } from '../typography/paragraphs/paragraphs.styled';
import * as Styled from './short-happy-hour-wrapper.styled';
import { ShortHappyHourWrapperProps } from './types';

export function ShortHappyHourWrapper({
  childrenAppointment,
  childrenDate,
}: ShortHappyHourWrapperProps) {
  return (
    <Styled.Wrapper>
      <Styled.ContainerAppointment>
        <Paragraph fontWeight={'semibold'} size={'small'} colorVariant="dark">
          Name of the event
        </Paragraph>
        {childrenAppointment}
      </Styled.ContainerAppointment>
      <Paragraph fontWeight={'semibold'} size={'small'} colorVariant="dark">
        Date:
      </Paragraph>
      <Styled.ContainerDate>{childrenDate}</Styled.ContainerDate>
    </Styled.Wrapper>
  );
}
