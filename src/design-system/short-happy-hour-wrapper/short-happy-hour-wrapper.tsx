import { Paragraph } from '../typography/paragraphs/paragraphs.styled';
import * as Styled from './short-happy-hour-wrapper.styled';
import { ShortHappyHourWrapperProps } from './types';

export function ShortHappyHourWrapper({
  childrenAppointment,
  childrenDate,
}: ShortHappyHourWrapperProps) {
  return (
    <Styled.Wrapper>
      <div>
        <Paragraph fontWeight={'semibold'} size={'small'} colorVariant="dark">
          Name of the event
        </Paragraph>
        {childrenAppointment}
      </div>
      <Paragraph fontWeight={'semibold'} size={'small'} colorVariant="dark">
        Date:
      </Paragraph>
      <div>{childrenDate}</div>
    </Styled.Wrapper>
  );
}
