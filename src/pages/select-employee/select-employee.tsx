import { Button, Paragraphs, Title } from '@/design-system';
import { Wrapper } from './select-employee.styled';
import * as Styled from './select-employee.styled';
import { ChangeEvent, useState } from 'react';
import { SelectEmployeeProps } from './types';

export function SelectEmployee({
  currentUser = 'Vinicius Rodrigues',
  employees,
}: SelectEmployeeProps) {
  const me = employees.find((employee) => employee.name === currentUser);
  const filteredEmployees = employees.filter(
    (employee) => employee.name !== currentUser,
  );
  const employeesList = me
    ? [{ ...me, name: me.name + ' (Me)' }, ...filteredEmployees]
    : filteredEmployees;

  const [filteredList, setFilteredList] = useState(employeesList);
  const [error, setError] = useState('');
  function filterBySearch(e: ChangeEvent<HTMLInputElement>) {
    const updatedList = employeesList.filter((employee) => {
      return employee.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredList(updatedList);

    if (updatedList.length === 0) {
      setError(
        "We couldn't find anyone with this name. Check your spelling or try a different name.",
      );
      return;
    }

    setError('');
  }

  return (
    <Wrapper>
      <Title variant="h5">Select Employee</Title>
      <Styled.mainDiv>
        <Styled.StyledLabel htmlFor="search">
          <Paragraphs size="small" fontWeight="semihair">
            Search Employee
          </Paragraphs>

          <Styled.SearchBox error={error}>
            <Styled.StyeldUsersIcon />
            <Styled.StyledInput
              data-testid="inputTest"
              title="search for employee"
              aria-label="Type employee name"
              onChange={filterBySearch}
              type="text"
              placeholder="Type a name"
            ></Styled.StyledInput>
          </Styled.SearchBox>
          <Styled.Span data-testid="errorTest">
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
      </Styled.mainDiv>

      {filteredList.map((employee, index) => {
        return (
          <Styled.DisplayResultsSearch key={index}>
            <Styled.employeeInfo>
              <Styled.StyeldUserIcon />
              <Styled.ProfileBox>
                <Paragraphs size="medium" fontWeight="semibold">
                  {employee.name}
                </Paragraphs>
                <Styled.StyledBadge text={employee.team} />
              </Styled.ProfileBox>
            </Styled.employeeInfo>
            <Button variant="ghost" color="primary" icon="ChevronRightIcon" />
          </Styled.DisplayResultsSearch>
        );
      })}
    </Wrapper>
  );
}
