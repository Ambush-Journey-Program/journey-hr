import { Input, SelectInput, TextArea } from '@/design-system';
import { PageHeader } from '../page-header';
import { generateAmountPeopleOptions } from './constants';
import * as Styled from './happy-hour-schedule.styled';

export function HappyHourSchedule() {
  const amountOfPeople = generateAmountPeopleOptions();
  return (
    <Styled.MainWrapper data-testid="happyHourSchedule">
      <Styled.StyledBackButton onClick={() => {}} />

      <PageHeader
        title="Happy Hour Schedule "
        subtitle="Choose the best dates to celebrate"
      />
      <Styled.InputsWrapper>
        <Input type="text" label="Name of the event" />

        <Input
          type="date"
          label="Date"
          hasIconRight={true}
          iconLeft="CalendarIcon"
        />
        <SelectInput
          title="Amount of people"
          required
          options={amountOfPeople}
          handleSelect={(value) => {
            console.log(value);
          }}
        />
      </Styled.InputsWrapper>
      <Styled.wrapper>
        <TextArea label="Description" />
      </Styled.wrapper>
      <Styled.wrapper>
        <Styled.StyledButton>Generate List</Styled.StyledButton>
      </Styled.wrapper>
    </Styled.MainWrapper>
  );
}
