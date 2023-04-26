import { Button, CardWrapper, Input } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';
import { employees } from './const';
import { GuestList } from './guest-list';

export function HappyHourEdit({
  minGuests = 8,
  maxGuests = 15,
}: HappyHourEditProps) {
  const [valueInput, setValueInput] = useState('');
  const [guestsIdList, setGuestsIdList] = useState<string[]>([]);
  const [validationError, setValidationError] = useState<string>('');

  const filteredEmployeesList = employees.filter(
    (employee) => !guestsIdList.includes(employee.guest.id),
  );

  const filteredGuestList = employees.filter((employee) =>
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
    <CardWrapper>
      <Styled.Header>
        <Styled.ContainerTitle>
          <Styled.TextTitle>Group Names</Styled.TextTitle>
        </Styled.ContainerTitle>
        <Styled.ContainerTitle>
          <Paragraphs fontWeight="semihair" size="medium" colorVariant="dark">
            {`(${guestsIdList.length} / ${maxGuests} People)`}
          </Paragraphs>
        </Styled.ContainerTitle>
        <Styled.ContainerInput>
          <Styled.SelectTheInput
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
    </CardWrapper>
  );
}
