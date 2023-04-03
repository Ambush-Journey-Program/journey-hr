import { Paragraph } from '../typography/paragraphs/paragraphs.styled';
import * as Styled from './short-happy-hour-wrapper.styled';
import { ShortHappyHourWrapperProps } from './types';

export function ShortHappyHourWrapper({
  childrenAppointment,
  childrenDate,
}: ShortHappyHourWrapperProps) {
  return (
    <Styled.Wrapper>
      <Paragraph fontWeight={'semibold'} size={'small'} colorVariant="dark">
        Name of the event
      </Paragraph>
      {childrenAppointment}
      <Paragraph fontWeight={'semibold'} size={'small'} colorVariant="dark">
        Date:
      </Paragraph>
      {childrenDate}
    </Styled.Wrapper>
  );
}
