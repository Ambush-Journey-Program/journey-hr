import { useState, useMemo } from 'react';
import { Button, CardWrapper, SelectInput } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';
import { employees, guestsListData } from './const';

export function HappyHourEdit({ addGuest, maxGuests }: HappyHourEditProps) {
  const [valueInput, setValueInput] = useState('');
  const [employeesList, setEmployeesList] = useState(employees);
  const [guestsList, setGuestsListList] = useState(guestsListData);

  const formattedOptions = useMemo(
    () =>
      employeesList.map((employee) => ({
        value: employee.id,
        label: employee.name,
      })),
    [employeesList],
  );

  const handleSubmit = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    const addItem = employeesList.find((el) => {
      if (el.id === valueInput) {
        const updatedGuestList = [...guestsList, el]; //find at employ and add to guest
        const cleanEmployeesList = employeesList.filter(
          (el) => el.id !== valueInput, //stay with elemente not selected on employes
        );
        const updatedEmployeesList = [...cleanEmployeesList]; //delete
        setEmployeesList(updatedEmployeesList);
        setGuestsListList(updatedGuestList);
        addGuest(updatedGuestList, updatedEmployeesList);
      }
    });
  };

  const handleDelete = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    const deleteItem = guestsList.find((el) => {
      const updatedEmployeesList = [...employeesList, el]; //find at guest and add to employ
      const cleanGuestsList = guestsList.filter(
        (el) => el.id !== valueInput, //stay with element not selected on guests
      );
      const updatedGuestList = [...cleanGuestsList]; //delete
      setEmployeesList(updatedEmployeesList);
      setGuestsListList(updatedGuestList);
      addGuest(updatedGuestList, updatedEmployeesList);
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
            id={valueInput}
            handleSelect={setValueInput}
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
          <ul>
            {guestsList.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <Button
                    variant="iconBtn"
                    icon="CakeIcon"
                    color="purple"
                    onClick={handleDelete}
                    disabled={false}
                  >
                    Add Name
                  </Button>
                </li>
              );
            })}
          </ul>
        </Styled.ContainerInput>
      </Styled.Header>
    </CardWrapper>
  );
}
