import { Paragraphs, Title } from '@/design-system';
import { Wrapper } from './select-employee.styled';
import * as Styled from './select-employee.styled';
import { ChangeEvent, useEffect, useState } from 'react';
import { Employee, Employees, SelectEmployeeProps } from './types';
import { EmployeeNotFound } from './components/employee-not-found';
import { SearchRow } from './components/search-row';
export function SelectEmployee({
  currentUser = 'Daniela Petry',
  employees,
}: SelectEmployeeProps) {
  const [employeesOrdered, setEmployeesOrdered] = useState<Employees>([]);
  const [employeesFiltered, setEmployeesFiltered] = useState<Employees>([]);
  const [touched, setTouched] = useState(false);

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
    setTouched(true);
    setEmployeesFiltered(updatedList);
  }

  return (
    <Wrapper>
      <Title variant="h5">Select Employee</Title>
      <div>
        <label htmlFor="search">
          <Paragraphs size="small" fontWeight="semihair">
            Search Employee
          </Paragraphs>
        </label>
        <Styled.SearchBox error={employeesFiltered.length === 0}>
          <Styled.DoubleUserIcon />
          <Styled.StyledInput
            id="search"
            title="search for employee"
            aria-label="Type employee name"
            onChange={filterBySearch}
            type="text"
            placeholder="Type a name"
          />
        </Styled.SearchBox>

        {employeesFiltered.length === 0 && touched && (
          <EmployeeNotFound data-testid="errorTest" />
        )}
      </div>

      {employeesFiltered.map((employee) => {
        return <SearchRow key={employee.id} employee={employee} />;
      })}
    </Wrapper>
  );
}
