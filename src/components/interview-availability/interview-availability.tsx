import { SetStateAction, useEffect, useRef, useState } from 'react';
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
  const CountInput = [inputOpportunity, inputShift, inputArea, inputData];
  const AraSelected = [];
  const formRef = useRef(null);

  useEffect(() => {
    AllInputs();
  }, [inputOpportunity, inputShift, inputArea, inputData]);

  function AllInputs() {
    console.log(inputOpportunity, inputShift, inputArea, inputData);
  }

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
          <Styled.Form
            onSubmit={(e) => {
              alert(CountInput);
            }}
            action=""
            // onChange={(e) => {
            //   console.log(formRef);
            // }}
          >
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
              disabled={AraSelected.length === 0}
            ></SelectInput>
            <Styled.ContainerBtn>
              <Button
                disabled={CountInput.length === 0}
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
