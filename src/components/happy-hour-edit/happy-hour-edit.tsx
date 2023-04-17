import { useState, useMemo, ButtonHTMLAttributes } from 'react';
import { CardWrapper, SelectInput } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';
import { employees } from './const';
import { GuestList } from './guest-list';

export function HappyHourEdit({ maxGuests }: HappyHourEditProps) {
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

  const handleSubmit = () => {
    const newId = filteredEmployeesList.find(
      (item) => item.guest.id === valueInput,
    )?.guest.id;

    if (newId) {
      setGuestsIdList((state) => [...state, newId]);
    }
  };

  const handleDelete = (id: string) => {
    setGuestsIdList((state) => state.filter((item) => item !== id));
  };
  const isButtonEnabled = guestsIdList.length >= maxGuests;
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
            {`(${[guestsIdList.length]}/{maxGuests}) People`}
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
          <Styled.BoxButton
            variant="ghost"
            icon="PlusIcon"
            color="secondary"
            onClick={handleSubmit}
            disabled={isButtonEnabled}
          >
            Add Name
          </Styled.BoxButton>
        </Styled.ContainerInput>
        <GuestList guestsList={filteredGuestList} onDelete={handleDelete} />
      </Styled.Header>
    </CardWrapper>
  );
}
