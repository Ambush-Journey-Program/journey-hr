import { Button, Paragraphs, Title } from '@/design-system';
import { Wrapper } from './select-employee.styled';
import * as Styled from './select-employee.styled';
import { employees } from './mocking';
import { UserIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useState } from 'react';

export function SelectEmployee() {
  const [filteredList, setFilteredList] = useState(employees);
  const [error, setError] = useState('');
  function filterBySearch(e: ChangeEvent<HTMLInputElement>) {
    let updatedList = [...employees];

    updatedList = updatedList.filter((employee) => {
      return employee.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredList(updatedList);

    if (filteredList.length === 0) {
      setError(
        "We couldn't find anyone with this name. Check your spelling or try a different name.",
      );
    }
  }

  return (
    <Wrapper>
      <Title variant={'h5'}>Select Employee</Title>
      <Styled.RelativeDiv>
        <Styled.StyledLabel htmlFor="search">
          <Paragraphs size="small" fontWeight="semihair">
            Search Employee
          </Paragraphs>

          <Styled.SearchBox error={error}>
            <Styled.StyeldUsersIcon />

            <Styled.StyledInput
              title="search for employee"
              aria-label="Type employee name"
              onChange={filterBySearch}
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
          <Styled.Span>
            {!!error && (
              <Paragraphs
                size="extrasmall"
                fontWeight="light"
                colorVariant="red"
              >
                {error}
              </Paragraphs>
            )}
          </Styled.Span>
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
