import { Input, Title } from '@ambush/ui';
import * as Styled from './select-employee.styled';
import { useEffect, useState } from 'react';
import { Employee, Employees, SelectEmployeeProps } from './types';
import { EmployeeNotFound } from './components/employee-not-found';
import { SearchRow } from './components/search-row';
export function SelectEmployee({
  currentUser = 'Ana Urbano',
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

  function filterBySearch(value: string) {
    const updatedList = employeesOrdered.filter((employee) => {
      return employee.name.toLowerCase().includes(value.toLowerCase());
    });
    setTouched(true);
    setEmployeesFiltered(updatedList);
  }

  return (
    <Styled.mainDiv data-testid="titleTest">
      <Title variant="h5">Select Employee</Title>
      <Styled.Div>
        <Input
          id="search"
          aria-label="Type employee name"
          onTextChange={filterBySearch}
          type="text"
          placeholder="Type a name"
          iconLeft="UsersIcon"
          hasIconRight
          iconRight="MagnifyingGlassIcon"
          label="  Search Employee"
          error={
            employeesFiltered.length === 0 &&
            touched &&
            "We couldn't find anyone with this name. Check your spelling or try a different name."
          }
        />
      </Styled.Div>

      {employeesFiltered.map((employee) => (
        <SearchRow
          data-testid="listTest"
          key={employee.id}
          employee={employee}
        />
      ))}
      {employeesFiltered.length === 0 && touched && <EmployeeNotFound />}
    </Styled.mainDiv>
  );
}
