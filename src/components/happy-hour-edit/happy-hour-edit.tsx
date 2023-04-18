import { useState, useMemo } from 'react';
import { CardWrapper, SelectInput, Tooltip } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';
import { employees } from './const';
import { GuestList } from './guest-list';

export function HappyHourEdit({
  minGuests = 2,
  maxGuests,
}: HappyHourEditProps) {
  const [valueInput, setValueInput] = useState('');
  const [guestsIdList, setGuestsIdList] = useState<string[]>([]);

  const filteredEmployeesList = useMemo(() => {
    return employees.filter(
      (employee) => !guestsIdList.includes(employee.guest.id),
    );
  }, [employees, guestsIdList]);

  const filteredGuestList = useMemo(() => {
    return employees.filter((employee) =>
      guestsIdList.includes(employee.guest.id),
    );
  }, [employees, guestsIdList]);

  const formattedOptions = useMemo(
    () =>
      filteredEmployeesList.map((employee) => ({
        value: employee.guest.id,
        label: employee.guest.name,
      })),
    [filteredEmployeesList],
  );

  function handleIncrease() {
    const newId = filteredEmployeesList.find(
      (item) => item.guest.id === valueInput,
    )?.guest.id;

    if (newId) {
      setGuestsIdList((state) => [...state, newId]);
    }
  }

  function handleDelete(id: string) {
    setGuestsIdList((state) => state.filter((item) => item !== id));
  }

  function handleSubmit() {
    console.log(guestsIdList);
    handleValidationError();
  }

  function handleValidationError() {
    // if (guestsIdList.length === 0) {
    //   return setError('Guests Required');
    // }
    // if (minGuests > guestsIdList.length) {
    //   return setError('Minimal length must be greater than ' + minGuests);
    // }
  }

  const isButtonEnabled = guestsIdList.length >= maxGuests;
  const isSubmitEnabled = guestsIdList.length <= minGuests;
  return (
    <CardWrapper>
      <Styled.Header>
        <Styled.ContainerTitle>
          <Styled.TextTitle>Group Names</Styled.TextTitle>
        </Styled.ContainerTitle>
        <Styled.ContainerTitle>
          <Paragraphs
            fontWeight={'semihair'}
            size={'medium'}
            colorVariant="dark"
          >
            {`(${[guestsIdList.length]}` + `/` + `${[maxGuests]} People)`}
          </Paragraphs>
        </Styled.ContainerTitle>
        <Styled.ContainerInput>
          <SelectInput
            name="guest"
            placeholder={'Label'}
            options={formattedOptions}
            required
            id={valueInput}
            handleSelect={setValueInput}
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
          <Tooltip text={handleValidationError}>
            <Styled.SubmitButton
              disabled={isSubmitEnabled}
              onClick={handleSubmit}
            >
              Schedule
            </Styled.SubmitButton>
          </Tooltip>
        </Styled.ContainerButton>
      </Styled.Header>
    </CardWrapper>
  );
}
