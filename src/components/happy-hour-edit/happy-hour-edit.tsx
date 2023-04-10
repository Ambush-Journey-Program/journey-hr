import { useState, useMemo } from 'react';
import { CardWrapper, SelectInput } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';
import { employees, guestsList } from './const';

export function HappyHourEdit({ addGuest, maxGuests }: HappyHourEditProps) {
  const [valuesInput, setValuesInput] = useState('');

  const formattedOptions = useMemo(
    () =>
      employees.map((employee) => ({
        value: employee.id,
        label: employee.name,
      })),
    [employees],
  );

  const handleSubmit = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    const addItem = employees.find((el) => {
      if (el.id === valuesInput) {
        const updatedList = [...guestsList, el];
        addGuest(updatedList);
      }
    });
  };
  const isButtonEnabled = guestsList.length >= maxGuests;
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
            ({[guestsList.length]}/{maxGuests}) People
          </Paragraphs>
        </Styled.ContainerTitle>
        <Styled.ContainerInput>
          <SelectInput
            name="guest"
            placeholder={'Label'}
            options={formattedOptions}
            required
            id={valuesInput}
            handleSelect={setValuesInput}
          ></SelectInput>
          <Styled.BoxButton
            variant="iconBtn"
            icon="PlusIcon"
            color="purple"
            onClick={handleSubmit}
            disabled={isButtonEnabled}
          >
            Add Name
          </Styled.BoxButton>
        </Styled.ContainerInput>
      </Styled.Header>
    </CardWrapper>
  );
}
