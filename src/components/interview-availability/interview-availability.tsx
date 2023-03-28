import { Subtitle, Title } from '@/design-system/typography';
import { useState } from 'react';
import { Button } from '../../design-system/button';
import { CardWrapper } from '../../design-system/card-wrapper';
import { Input } from '../../design-system/input';
import { SelectInput } from '../../design-system/select-input';
import { exampleAre, exampleOpportunity, shiftOptions } from './constants';
import * as Styled from './interview-availability.styled';

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
    <CardWrapper>
      <Styled.InterviewAvailability>
        <Styled.ContainerTitle>
          <Title variant="h1" data-testid="interview-title-test">
            Technical Interview Availability
          </Title>
        </Styled.ContainerTitle>
        <Styled.ContainerTitle>
          <Subtitle variant="s4" data-testid="interview-subtitle-test">
            Schedule a technical interview for a candidate.
          </Subtitle>
        </Styled.ContainerTitle>
        <div>
          <Styled.Form
            data-testId="interview-form-test"
            onSubmit={handleSubmit}
            action=""
          >
            <Input
              name="data"
              type="date"
              label="Date:"
              onTextChange={setInputData}
            />
            <SelectInput
              data-testId="interview-input-test"
              name="area"
              title={'Area:'}
              placeholder={'UX Designer'}
              options={exampleAre}
              required
              value={valuesInput.area}
              handleSelect={(value) =>
                setValuesInput({ ...valuesInput, area: value })
              }
            ></SelectInput>
            <SelectInput
              name="shift"
              title={'Shift:'}
              placeholder={'Morning'}
              options={shiftOptions}
              required
              value={valuesInput.shift}
              handleSelect={(value) =>
                setValuesInput({ ...valuesInput, shift: value })
              }
            ></SelectInput>
            <SelectInput
              name="opportunity"
              title={'Opportunity:'}
              placeholder={'Product Designer'}
              options={exampleOpportunity}
              required
              value={valuesInput.opportunity}
              handleSelect={(value) =>
                setValuesInput({ ...valuesInput, opportunity: value })
              }
            ></SelectInput>
            <Styled.ContainerBtn>
              <Button sizeVariant={'default'} disabled={!isButtonEnabled}>
                Search
              </Button>
            </Styled.ContainerBtn>
          </Styled.Form>
        </div>
      </Styled.InterviewAvailability>
    </CardWrapper>
  );
}
