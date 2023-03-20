import React from 'react';
import { useRef, useState } from 'react';
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

  const dataNameRef = React.useRef() as React.HTMLProps<HTMLInputElement>;
  console.log(dataNameRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataNameRef);
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
            <Input ref={dataNameRef} name="data" label={'Date:'}></Input>
            <SelectInput
              name="area"
              title={'Area:'}
              placeholder={'UX Designer'}
              options={exampleAre}
              required
              value={inputArea}
            ></SelectInput>
            <SelectInput
              name="shift"
              title={'Shift:'}
              placeholder={'Morning'}
              options={exampleOptions}
              required
              value={inputShift}
            ></SelectInput>
            <SelectInput
              name="opportunity"
              title={'Opportunity:'}
              placeholder={'Product Designer'}
              options={exampleOpportunity}
              required
              value={inputOpportunity}
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
