import { useState } from 'react';
import { Button } from '../button';
import { CardWrapper } from '../card-wrapper';
import { Input } from '../input';
import { SelectInput } from '../select-input';
import {
  exampleAre,
  exampleDate,
  exampleOpportunity,
  exampleOptions,
} from './constants';
import * as Styled from './interview-availability.styled';

export function InterviewAvailability(props: { callBack: Function }) {
  const [inputData, setInputData] = useState('');
  const [inputArea, setInputArea] = useState('');
  const [inputShift, setInputShift] = useState('');
  const [inputOpportunity, setInputOpportunity] = useState('');
  console.log(inputData);

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
            <Input
              label={'Date:'}
              placeholder={'01/06/2025'}
              required
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            ></Input>
            <SelectInput
              title={'Area:'}
              placeholder={'UX Designer'}
              options={exampleAre}
              required
              value={inputArea}
              onChange={(e) => setInputArea(e.target.value)}
            ></SelectInput>
            <SelectInput
              title={'Shift:'}
              placeholder={'Morning'}
              options={exampleOptions}
              required
              value={inputShift}
              onChange={(e) => setInputShift(e.target.value)}
            ></SelectInput>
            <SelectInput
              title={'Opportunity:'}
              placeholder={'Product Designer'}
              options={exampleOpportunity}
              required
              value={inputOpportunity}
              onChange={(e) => setInputOpportunity(e.target.value)}
            ></SelectInput>
          </Styled.Form>
          <Styled.ContainerBtn>
            <Button
              sizeVariant={'default'}
              // onClickCallback={() => props.callBack(inputParam)}
            >
              Search
            </Button>
          </Styled.ContainerBtn>
        </div>
      </Styled.InterviewAvailability>
    </CardWrapper>
  );
}
