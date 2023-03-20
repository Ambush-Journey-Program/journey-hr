import { useState } from 'react';
import { Button } from '../../design-system/button';
import { CardWrapper } from '../../design-system/card-wrapper';
import { Input } from '../../design-system/input';
import { SelectInput } from '../../design-system/select-input';
import { exampleAre, exampleOpportunity, exampleOptions } from './constants';
import * as Styled from './interview-availability.styled';

export function InterviewAvailability() {
  const [inputData, setInputData] = useState('');
  const [inputArea, setInputArea] = useState('');
  const [inputShift, setInputShift] = useState('');
  const [inputOpportunity, setInputOpportunity] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(inputData, inputArea, inputShift, inputOpportunity);
  };
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
          <Styled.Form onSubmit={handleSubmit} action="">
            <Input
              name="data"
              type={'date'}
              label={'Date:'}
              onTextChange={setInputData}
            ></Input>
            <SelectInput
              name="area"
              title={'Area:'}
              placeholder={'UX Designer'}
              options={exampleAre}
              required
              value={inputArea}
              handleSelect={(value) => setInputArea(value)}
            ></SelectInput>
            <SelectInput
              name="shift"
              title={'Shift:'}
              placeholder={'Morning'}
              options={exampleOptions}
              required
              value={inputShift}
              handleSelect={(value) => setInputShift(value)}
            ></SelectInput>
            <SelectInput
              name="opportunity"
              title={'Opportunity:'}
              placeholder={'Product Designer'}
              options={exampleOpportunity}
              required
              value={inputOpportunity}
              handleSelect={(value) => setInputOpportunity(value)}
              disabled={setInputArea.length === 0}
            ></SelectInput>
            <Styled.ContainerBtn>
              <Button sizeVariant={'default'}>Search</Button>
            </Styled.ContainerBtn>
          </Styled.Form>
        </div>
      </Styled.InterviewAvailability>
    </CardWrapper>
  );
}
