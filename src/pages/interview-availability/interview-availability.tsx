import { useState } from 'react';
import { Button, CardWrapper, Input, SelectInput } from '@ambush/ui';
import { exampleAre, exampleOpportunity, shiftOptions } from './constants';
import * as Styled from './interview-availability.styled';
import { PageHeader } from '../../components/page-header';

export function InterviewAvailability() {
  const [inputData, setInputData] = useState('');
  const [valuesInput, setValuesInput] = useState({
    area: '',
    shift: '',
    opportunity: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Your state values: \n
    Date: ${inputData} \n
    Area: ${valuesInput.area} \n
    Shift: ${valuesInput.shift} \n
    Opportunity: ${valuesInput.opportunity}`);
  };

  const isButtonEnabled =
    valuesInput.area &&
    valuesInput.shift &&
    valuesInput.opportunity &&
    inputData;

  return (
      <Styled.InterviewAvailability>
        <PageHeader
          title="Technical Interview Availability"
          subtitle="Schedule a technical interview for a candidate."
        />
        <div>
          <Styled.Form
            data-testid="interview-form-test"
            onSubmit={handleSubmit}
            action=""
          >
            <Input
              name="data"
              type="date"
              label="Date:"
              onTextChange={setInputData}
              hasIconRight
              iconLeft="CalendarIcon"
            />
            <SelectInput
              name="area"
              title={'Area:'}
              placeholder={'UX Designer'}
              options={exampleAre}
              required
              value={valuesInput.area}
              handleSelect={(value) => {
                setValuesInput({ ...valuesInput, area: value });
              }}
            />

            <SelectInput
              name="shift"
              title={'Shift:'}
              placeholder={'Morning'}
              options={shiftOptions}
              required
              value={valuesInput.shift}
              handleSelect={(value) => {
                setValuesInput({ ...valuesInput, shift: value });
              }}
            />
            <SelectInput
              name="opportunity"
              title={'Opportunity:'}
              placeholder={'Product Designer'}
              options={exampleOpportunity}
              required
              value={valuesInput.opportunity}
              handleSelect={(value) => {
                setValuesInput({ ...valuesInput, opportunity: value });
              }}
            />
            <Styled.ContainerBtn>
              <Button sizeVariant="medium" disabled={!isButtonEnabled}>
                Search
              </Button>
            </Styled.ContainerBtn>
          </Styled.Form>
        </div>
      </Styled.InterviewAvailability>
  );
}
