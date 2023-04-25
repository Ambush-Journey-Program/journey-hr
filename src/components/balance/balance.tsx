import {
  Avatar,
  Button,
  Paragraphs,
  SelectInput,
  Subtitle,
} from '@/design-system';
import * as Styled from './balance.styled';
import { employees as employeesMock } from './mocking/holidays';
import { BalanceProps } from './types';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

export function Balance({
  employees = employeesMock,
  buttonClick,
  buttonText,
}: BalanceProps) {
  return (
    <Styled.Wrapper>
      <Styled.Div2>
        {employees.length >= 1 && (
          <Styled.Header>
            <Avatar src={employees[0].avatar} sizeVariant="small" />

            <Subtitle variant={'s4'} fontWeight={'medium'}>
              {employees[0].label}
            </Subtitle>
            {employees.length > 1 && '--'}
          </Styled.Header>
        )}

        {buttonClick && (
          <Button
            onClick={buttonClick}
            variant="outlined"
            color="alternative"
            sizeVariant="small"
          >
            {buttonText}
          </Button>
        )}
      </Styled.Div2>

      <Styled.mainDiv>
        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Recharge Days
          </Subtitle>
          <Paragraphs size="extralarge" fontWeight="semibold">
            20 days available
          </Paragraphs>
        </Styled.Div>
        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Consumed
          </Subtitle>
          <Paragraphs size="extralarge" fontWeight="semibold">
            0 days
          </Paragraphs>
        </Styled.Div>
        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Next Refill
          </Subtitle>
          <Paragraphs size="extralarge" fontWeight="semibold">
            Mar 24, 2024
          </Paragraphs>
        </Styled.Div>
        <Styled.VeticalLine></Styled.VeticalLine>
        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Optional Holidays
          </Subtitle>

          <Paragraphs size="extralarge" fontWeight="semibold">
            0/4 used
          </Paragraphs>
        </Styled.Div>
      </Styled.mainDiv>
    </Styled.Wrapper>
  );
}
