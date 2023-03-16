import { SetStateAction, useEffect, useState } from 'react';
import { Button } from '../../design-system/button';
import { CardWrapper } from '../../design-system/card-wrapper';
import { Input } from '../../design-system/input';
import { SelectInput } from '../../design-system/select-input';
import { exampleAre, exampleOpportunity, exampleOptions } from './constants';
import * as Styled from './interview-availability.styled';
import { IInterviewAvailabilityProps } from './types';

export function InterviewAvailability({
  onChange,
}: IInterviewAvailabilityProps) {
  const [inputData, setInputData] = useState('');
  const [inputArea, setInputArea] = useState('');
  const [inputShift, setInputShift] = useState('');
  const [inputOpportunity, setInputOpportunity] = useState('');

  useEffect(() => {
    console.log(inputOpportunity, inputShift, inputArea, inputData);
  }, [inputOpportunity, inputShift, inputArea, inputData]);

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
            <Input label={'Date:'} onTextChange={setInputData}></Input>
            <SelectInput
              title={'Area:'}
              placeholder={'UX Designer'}
              options={exampleAre}
              required
              value={inputArea}
              handleSelect={(value) => setInputArea(value)}
            ></SelectInput>
            <SelectInput
              title={'Shift:'}
              placeholder={'Morning'}
              options={exampleOptions}
              required
              value={inputShift}
              handleSelect={(value) => setInputShift(value)}
            ></SelectInput>
            <SelectInput
              title={'Opportunity:'}
              placeholder={'Product Designer'}
              options={exampleOpportunity}
              required
              value={inputOpportunity}
              handleSelect={(value) => setInputOpportunity(value)}
            ></SelectInput>
            <Styled.ContainerBtn>
              <Button
                // disabled
                sizeVariant={'default'}
                // onClick={() => props.callBack()}
              >
                Search
              </Button>
            </Styled.ContainerBtn>
          </Styled.Form>
        </div>
      </Styled.InterviewAvailability>
    </CardWrapper>
  );
}
