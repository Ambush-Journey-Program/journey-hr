import { Button, Input, SelectInput, TextArea } from '@/design-system';
import { PageHeader } from '../page-header';
import { example } from './constants';
import * as Styled from './happy-hour-schedule.styled';

export function HappyHourSchedule() {
  function handleSelectEvent(selectedValue: string): void {
    throw new Error('Function not implemented.');
  }

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
          title="Amount of people"
          required
          options={example}
          handleSelect={handleSelectEvent}
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
