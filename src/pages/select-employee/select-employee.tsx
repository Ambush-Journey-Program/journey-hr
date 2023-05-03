import { Button, Paragraphs, Title } from '@/design-system';
import { Wrapper } from './select-employee.styled';
import * as Styled from './select-employee.styled';
import { employees } from './mocking';
import { UserIcon } from '@heroicons/react/24/outline';

export function SelectEmployee() {
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

      {employees.map((employee, index) => {
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
