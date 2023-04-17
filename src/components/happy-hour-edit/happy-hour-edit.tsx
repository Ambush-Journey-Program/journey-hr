import { CardWrapper, Input } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';
import { useCallback, useState } from 'react';
import { employees, guestsList } from './const';

export function HappyHourEdit({ guests, maxGuests }: HappyHourEditProps) {
  const [nameGuest, setNameGuest] = useState('');
  const [list, setList] = useState(guestsList);
  const [guestToAdd, setGuestToAdd] = useState<typeof employees[0] | null>(
    null,
  );

  function handleChange(input: string) {
    setNameGuest(input);

    const employeesToAdd = employees.filter((employee) => {
      const lowerCaseEmployeeName = employee.name.toLowerCase();
      const lowerCaseEmployeeSurname = employee.surname.toLowerCase();
      const lowerCaseInput = input.toLowerCase();

      const nameWithSurname = lowerCaseEmployeeName.concat(
        ' ',
        lowerCaseEmployeeSurname,
      );

      return (
        lowerCaseEmployeeName === lowerCaseInput ||
        nameWithSurname === lowerCaseInput
      );
    });

    if (employeesToAdd.length !== 1) {
      return;
    }
    const [employeeToAdd] = employeesToAdd;

    const employeeAlreadyInvited = list.find(
      (employee) => employee.id === employeeToAdd.id,
    );

    if (employeeAlreadyInvited) {
      return;
    }

    setGuestToAdd(employeeToAdd);
  }

  function handleAdd(guest: typeof employees[0]) {
    const newList = [guest, ...list];
    setList(newList);
    setGuestToAdd(null);
  }
  console.log(list);

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
            ({guests.length}/{maxGuests}) People
          </Paragraphs>
        </Styled.ContainerTitle>
        <Styled.ContainerInput>
          <Input
            type="text"
            value={nameGuest}
            onTextChange={handleChange}
          ></Input>
          <Styled.BoxButton
            disabled={!guestToAdd || list.length === maxGuests}
            variant="iconBtn"
            icon="PlusIcon"
            color="purple"
            onClick={() => guestToAdd && handleAdd(guestToAdd)}
          >
            Add Name
          </Styled.BoxButton>
        </Styled.ContainerInput>
      </Styled.Header>
    </CardWrapper>
  );
}
