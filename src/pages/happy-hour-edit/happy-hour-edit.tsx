import { useState } from 'react';
import { HappyHourEditProps } from './types';
import { Paragraph, SelectInput } from '@ambush/ui';
import * as Styled from './happy-hour-edit.styled';
import { EMPLOYEES } from './const';
import { GuestList } from './guest-list';

export function HappyHourEdit({
  minGuests = 8,
  maxGuests = 15,
}: HappyHourEditProps) {
  const [valueInput, setValueInput] = useState('');
  const [guestsIdList, setGuestsIdList] = useState<string[]>([]);
  const [validationError, setValidationError] = useState<string>('');

  const filteredEmployeesList = EMPLOYEES.filter(
    (employee) => !guestsIdList.includes(employee.guest.id),
  );

  const filteredGuestList = EMPLOYEES.filter((employee) =>
    guestsIdList.includes(employee.guest.id),
  );

  const formattedOptions = filteredEmployeesList.map((employee) => ({
    value: employee.guest.id,
    label: employee.guest.name,
  }));

  function handleIncrease() {
    const newId = filteredEmployeesList.find(
      (item) => item.guest.id === valueInput,
    )?.guest.id;
    if (newId) {
      const newState = [...guestsIdList, newId];
      const error = getError(newState);
      setGuestsIdList(newState);
      setValidationError(error);
    }
  }

  function handleDelete(id: string) {
    setGuestsIdList((state) => state.filter((item) => item !== id));
  }

  function handleOnClick() {
    const error = getError(guestsIdList);
    setValidationError(error);

    if (error) {
      return;
    }
    console.log('Scheduled!');
  }

  function getError(guestList: string[]) {
    if (minGuests > guestList.length) {
      return `Minimum guests must be greater than  ${minGuests - 1}.`;
    }
    if (maxGuests === guestList.length) {
      return 'People limit reached.';
    }
    return '';
  }

  const isButtonEnabled = guestsIdList.length >= maxGuests;
  const isSubmitEnabled = guestsIdList.length <= minGuests;
  return (
      <Styled.Header>
        <Styled.ContainerTitle>
          <Styled.TextTitle>Group Names</Styled.TextTitle>
        </Styled.ContainerTitle>
        <Styled.ContainerTitle>
          <Paragraph fontWeight="semihair" size="medium" colorVariant="dark">
            {`(${guestsIdList.length} / ${maxGuests} People)`}
          </Paragraph>
        </Styled.ContainerTitle>
        <Styled.ContainerInput>
          <SelectInput
            name="guest"
            placeholder={'Select a name'}
            options={formattedOptions}
            required
            id={valueInput}
            handleSelect={setValueInput}
            warn={validationError}
          />
          <Styled.IncreaseButton
            variant="ghost"
            icon="PlusIcon"
            color="secondary"
            onClick={handleIncrease}
            disabled={isButtonEnabled}
          >
            Add Name
          </Styled.IncreaseButton>
        </Styled.ContainerInput>
        <GuestList guestsList={filteredGuestList} onDelete={handleDelete} />
        <Styled.ContainerButton>
          <Styled.ScheduleButton
            sizeVariant="medium"
            onClick={handleOnClick}
            disabled={isSubmitEnabled}
          >
            Schedule
          </Styled.ScheduleButton>
        </Styled.ContainerButton>
      </Styled.Header>
  );
}
