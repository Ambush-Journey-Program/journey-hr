import { Button, Paragraphs, Title } from '@/design-system';
import { Wrapper } from './select-employee.styled';
import * as Styled from './select-employee.styled';
import { employees } from './mocking';
import { UserIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useState } from 'react';

export function SelectEmployee() {
  // const [result, setResults] = useState<Employees>();
  const [filteredList, setFilteredList] = useState(employees);
  function filterBySearch(e: ChangeEvent<HTMLInputElement>) {
    let updatedList = [...employees];

    // eslint-disable-next-line array-callback-return
    updatedList = updatedList.filter((employee) => {
      return employee.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // Trigger render with updated valuesr

    setFilteredList(updatedList);
  }

  return (
    <Wrapper>
      <Title variant={'h5'}>Select Employee</Title>
      <Styled.RelativeDiv>
        <Styled.StyledLabel>
          <Paragraphs size="small" fontWeight="semihair">
            Search Employee
          </Paragraphs>

          <Styled.SearchBox>
            <Styled.StyeldUsersIcon />

            <Styled.StyledInput
              onInput={filterBySearch}
              type="text"
              placeholder="Type a name"
            ></Styled.StyledInput>
            <Button
              color="alternative"
              sizeVariant="large"
              variant="ghost"
              icon="MagnifyingGlassIcon"
            />
          </Styled.SearchBox>
        </Styled.StyledLabel>
      </Styled.RelativeDiv>

      {filteredList.map((employee, index) => {
        return (
          <Styled.DisplayResultsSearch key={index}>
            <Styled.ProfileBox>
              <UserIcon width={'30px'} />
              <Paragraphs size="medium" fontWeight="semibold">
                {employee.name}
              </Paragraphs>
              <Styled.StyledBadge text={employee.team} />
            </Styled.ProfileBox>
            <Button variant="ghost" color="primary" icon="ChevronRightIcon" />
          </Styled.DisplayResultsSearch>
        );
      })}
    </Wrapper>
  );
}
