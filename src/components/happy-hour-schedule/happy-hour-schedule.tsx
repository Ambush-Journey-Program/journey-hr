import { Button, Input, SelectInput, TextArea } from '@/design-system';
import { PageHeader } from '../page-header';
import { example } from './constants';
import * as Styled from './happy-hour-schedule.styled';
import { ChangeEvent, useState } from 'react';
import { IHappyHourScheduleProps } from './types';

export function HappyHourSchedule({
  handleSelect = () => {},
}: IHappyHourScheduleProps) {
  function handleSelectEvent(event: ChangeEvent<HTMLSelectElement>) {
    handleSelect(event.target.value);
    setTouched(true);
  }
  const [touched, setTouched] = useState(false);

  return (
    <Styled.MainWrapper data-testid="happyHourSchedule">
      <PageHeader
        title={'Happy Hour Schedule '}
        subtitle={'Choose the best dates to celebrate'}
      />
      <Styled.InputsWrapper>
        <Input type="text" label={'Name of the event'}></Input>

        <Input type="date" label={'Date'}></Input>
        <SelectInput
          touched={touched}
          title="Amount of people"
          required
          options={example}
          onChange={handleSelectEvent}
        />
      </Styled.InputsWrapper>
      <Styled.wrapper>
        <TextArea label={'Description'} />
      </Styled.wrapper>
      <Styled.wrapper>
        <Styled.StyledButton>Generate List</Styled.StyledButton>
      </Styled.wrapper>
    </Styled.MainWrapper>
  );
}
function setTouched(arg0: boolean) {
  throw new Error('Function not implemented.');
}
