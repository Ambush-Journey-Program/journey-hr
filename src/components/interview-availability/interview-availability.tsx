import { useState } from 'react';
import { Button } from '../../design-system/button';
import { CardWrapper } from '../../design-system/card-wrapper';
import { Input } from '../../design-system/input';
import { SelectInput } from '../../design-system/select-input';
import { exampleAre, exampleOpportunity, exampleShift } from './constants';
import * as Styled from './interview-availability.styled';

type Opportunities = number | string;

export function InterviewAvailability() {
  const [inputData, setInputData] = useState('');
  const [valuesInput, setValuesInput] = useState<{
    area: Opportunities;
    shift: Opportunities;
    opportunity: Opportunities;
  }>({
    area: '',
    shift: '',
    opportunity: '',
  });

  const selectInputsData = [
    {
      id: '1',
      name: 'area',
      options: exampleAre,
      title: 'Area',
      required: true,
      dataTestId: 'interview-input-test',
      value: valuesInput.area,
      handleSelect: (value: string) =>
        setValuesInput({ ...valuesInput, area: value }),
    },
    {
      id: '2',
      name: 'shift',
      options: exampleShift,
      title: 'Shift',
      required: true,
      dataTestId: 'interview-input-test',
      value: valuesInput.shift,
      handleSelect: (value: string) =>
        setValuesInput({ ...valuesInput, shift: value }),
    },
    {
      id: '3',
      name: 'opportunity',
      options: exampleOpportunity,
      title: 'Opportunity',
      required: true,
      dataTestId: 'interview-input-test',
      value: valuesInput.opportunity,
      handleSelect: (value: string) =>
        setValuesInput({ ...valuesInput, opportunity: value }),
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Your state values: \n
    Date: ${inputData} \n
    Area: ${valuesInput.area} \n
    Shift: ${valuesInput.shift} \n
    Opportunity: ${valuesInput.opportunity}`);
  };

  return (
    <CardWrapper>
      <Styled.InterviewAvailability>
        <div>
          <Styled.Title data-testid="interview-title-test">
            Technical Interview Availability
          </Styled.Title>
          <Styled.Subtitle data-testid="interview-subtitle-test">
            Schedule a technical interview for a candidate.
          </Styled.Subtitle>
        </div>
        <div>
          <Styled.Form
            data-testid="interview-form-test"
            onSubmit={handleSubmit}
            action=""
          >
            <Input
              name="data"
              type={'date'}
              label={'Date:'}
              onTextChange={setInputData}
            />
            {selectInputsData.map((input) => (
              <SelectInput key={input.id} {...input} />
            ))}
            <Styled.ContainerBtn>
              <Button
                sizeVariant={'default'}
                disabled={!valuesInput && !inputData ? true : false}
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
