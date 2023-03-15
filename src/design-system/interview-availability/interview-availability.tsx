import { Button } from '../button';
import { CardWrapper } from '../card-wrapper';
import { Input } from '../input';
import { SelectInput } from '../select-input';
import {
  exampleAre,
  exampleDate,
  exampleOpportunity,
  exampleOptions,
} from './helper';
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
          <Styled.Form action="">
            <SelectInput
              title={'Date:'}
              required
              options={exampleDate}
            ></SelectInput>
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
          </Styled.Form>
          <Styled.ContainerBtn>
            <Button sizeVariant={'default'}>Search</Button>
          </Styled.ContainerBtn>
        </div>
      </Styled.InterviewAvailability>
    </CardWrapper>
  );
}
