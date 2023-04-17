import { CardWrapper, Input } from '@/design-system';
import { HappyHourEditProps } from './types';
import { Paragraphs } from '@/design-system/typography';
import * as Styled from './happy-hour-edit.styled';
import { SetStateAction, useState } from 'react';
import { guestsList } from './const';

export function HappyHourEdit({ guests, totalGuests }: HappyHourEditProps) {
  const [nameGuest, setNameGuest] = useState('');
  const [list, setList] = useState(guestsList);
  // const isButtonEnabled = () => {
  //   if (totalGuests >= guests.length) {
  //     true;
  //   }
  // };
  console.log(guestsList.reduce((a, v) => (a = a + v.numb), 0));

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setNameGuest(event.target.value);
    console.log(`Your state values: \n
    Date: ${nameGuest} `);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(`Your state values: \n
    Date: ${inputData} `);
  };
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
            ({guests.length}/{totalGuests}) People
          </Paragraphs>
        </Styled.ContainerTitle>
        <Styled.ContainerInput>
          <Input
            type="text"
            value={nameGuest}
            onTextChange={handleChange}
          ></Input>
          <Styled.BoxButton
            disabled={true}
            variant="iconBtn"
            icon="PlusIcon"
            color="purple"
            onClick={handleAdd}
          >
            Add Name
          </Styled.BoxButton>
        </Styled.ContainerInput>
      </Styled.Header>
    </CardWrapper>
  );
}
