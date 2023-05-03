import { Badge, Button, Paragraphs, Title } from '@/design-system';
import { Wrapper } from './select-employee.styled';
import { SelectEmployeeProps } from './types';
import * as Styled from './select-employee.styled';
import { employees } from './mocking';
import { UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';

export function SelectEmployee({ results }: SelectEmployeeProps) {
  return (
    <Wrapper>
      <Title variant={'h5'}>Select Employee</Title>
      <Styled.RelativeDiv>
        <Styled.Search>
          <Styled.StyeldIcon />

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
        </Styled.Search>
      </Styled.RelativeDiv>

      {employees.map((item, index) => {
        return (
          <Styled.DisplayResultsSearch key={index}>
            <Styled.ProfileBox>
              <Styled.StyeldUserIcon />
              <Paragraphs size="medium" fontWeight="semibold">
                {item.name}
              </Paragraphs>
              <Styled.StyledBadge text={item.team} />
            </Styled.ProfileBox>
            <Button variant="ghost" color="primary" icon="ArrowRightIcon" />
          </Styled.DisplayResultsSearch>
        );
      })}
    </Wrapper>
  );
}
