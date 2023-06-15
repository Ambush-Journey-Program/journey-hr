import { Input, SelectInput, TextArea } from '@ambush/ui';
import { generateAmountPeopleOptions } from './constants';
import * as Styled from './happy-hour-schedule.styled';
import router from 'next/router';
import { BackButton, PageHeader } from '@/components';

export function HappyHourSchedule () {
  const amountOfPeople = generateAmountPeopleOptions();
  return (
    <Styled.MainWrapper data-testid="happyHourSchedule">
      <PageHeader
        backButton={<BackButton onClick={() => router.back()} />}
        title="Happy Hour Schedule "
        subtitle="Choose the best dates to celebrate"
      />
      <Styled.InputsWrapper>
        <Input type="text" label="Name of the event" />

        <Input
          type="date"
          label="Date"
          hasIconRight
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
      <div>
        <TextArea label="Description" />
      </div>
      <div>
        <Styled.StyledButton>Generate List</Styled.StyledButton>
      </div>
    </Styled.MainWrapper>
  );
}
