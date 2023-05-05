import { Badge, Button, Paragraphs, Title } from '@/design-system';
import { Wrapper } from './select-employee.styled';
import * as Styled from './select-employee.styled';
import { ChangeEvent, useEffect, useState } from 'react';
import { Employee, Employees, SelectEmployeeProps } from './types';

export function SelectEmployee({
  currentUser = '',
  employees,
}: SelectEmployeeProps) {
  const [employeesOrdered, setEmployeesOrdered] = useState<Employees>([]);
  const [employeesFiltered, setEmployeesFiltered] = useState<Employees>([]);

  useEffect(() => {
    const me = employees.find((employee) => employee.name === currentUser);
    const newEmployeesFiltered = employees.filter(
      (employee) => employee.name !== currentUser,
    );

    const employeesRefined = [
      { ...me, name: `${me.name} (Me)` } as Employee,
      ...newEmployeesFiltered,
    ].filter((item) => item);

    setEmployeesOrdered(employeesRefined as Employees);
    setEmployeesFiltered(employeesRefined as Employees);
  }, []);

  function filterBySearch(e: ChangeEvent<HTMLInputElement>) {
    const updatedList = employeesOrdered.filter((employee) => {
      return employee.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setEmployeesFiltered(updatedList);
  }

  return (
    <Wrapper>
      <Title variant="h5">Select Employee</Title>
      <div>
        <Styled.StyledLabel htmlFor="search">
          <Paragraphs size="small" fontWeight="semihair">
            Search Employee
          </Paragraphs>
          <Styled.SearchBox error={employeesFiltered.length === 0}>
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

          {employeesFiltered.length === 0 && (
            <Styled.Span data-testid="errorTest">
              <Paragraphs
                size="extrasmall"
                fontWeight="light"
                colorVariant="red"
              >
                We couldn't find anyone with this name. Check your spelling or
                try 0a different name.
              </Paragraphs>
            </Styled.Span>
          )}
        </Styled.StyledLabel>
      </div>

      {employeesFiltered.map((employee, index) => {
        return (
          <Styled.DisplayResultsSearch key={index}>
            <Styled.employeeInfo>
              <Styled.StyeldUserIcon />
              <Styled.ProfileBox data-testid="listTest">
                <Paragraphs size="medium" fontWeight="semibold">
                  {employee.name}
                </Paragraphs>
                <Badge text={employee.team} />
              </Styled.ProfileBox>
            </Styled.employeeInfo>
            <Button variant="ghost" color="primary" icon="ChevronRightIcon" />
          </Styled.DisplayResultsSearch>
        );
      })}
    </Wrapper>
  );
}
