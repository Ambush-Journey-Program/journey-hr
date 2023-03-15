import { CardWrapper } from '../card-wrapper';
import { Input } from '../input';
import { SelectInput } from '../select-input';
import { exampleAre, exampleOpportunity, exampleOptions } from './helper';
import * as Styled from './interview-availability.styled';

export function InterviewAvailability() {
  return (
    <CardWrapper background="default">
      <Styled.InterviewAvailability>
        <div>
          <Styled.Title>Technical Interview Availability</Styled.Title>
          <Styled.Subtitle>
            Schedule a technical interview for a candidate.
          </Styled.Subtitle>
        </div>
        <div>
          <form action="">
            <Input label={'Date:'} required></Input>
            <SelectInput
              title={'Area:'}
              options={exampleAre}
              required
            ></SelectInput>
            <SelectInput
              title={'Shift:'}
              options={exampleOptions}
              required
            ></SelectInput>
            <SelectInput
              title={'Opportunity:'}
              options={exampleOpportunity}
              required
            ></SelectInput>
          </form>
        </div>
      </Styled.InterviewAvailability>
    </CardWrapper>
  );
}
