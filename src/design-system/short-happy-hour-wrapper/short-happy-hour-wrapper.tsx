import { Paragraph } from '../typography/paragraphs/paragraphs.styled';
import * as Styled from './short-happy-hour-wrapper.styled';
import { ShortHappyHourWrapperProps } from './types';

export function ShortHappyHourWrapper({
  childrenAppointment,
  childrenDate,
}: ShortHappyHourWrapperProps) {
  return (
    <Styled.Wrapper>
      <Styled.ContainerName>
        <Paragraph fontWeight={'semihair'} size={'small'} colorVariant="dark">
          Name of the event
        </Paragraph>
        <Styled.ContainerAppointment>
          {childrenAppointment}
        </Styled.ContainerAppointment>
      </Styled.ContainerName>
      <div>
        <Paragraph fontWeight={'semihair'} size={'small'} colorVariant="dark">
          Date:
        </Paragraph>
        <Styled.ContainerDate>{childrenDate}</Styled.ContainerDate>
      </div>
    </Styled.Wrapper>
  );
}
