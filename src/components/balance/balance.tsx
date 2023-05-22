import { Avatar, Subtitle } from '@/design-system';
import * as Styled from './balance.styled';
import { employees as employeesMock } from './mocking/holidays';
import { BalanceProps } from './types';
import { useState } from 'react';

const MAX_OPTIONAL_DAYS = '4';
function daysLabel(days: number) {
  const dayOrDays = days === 1 || days === -1 ? 'day' : 'days';
  return `${days.toString()} ${dayOrDays}`;
}

export function Balance({
  employees = employeesMock,
  buttonClick,
  buttonText = 'View Time Off',
  isAdmin,
  availableDays = 0,
  nextRefill = '',
  consumedDays,
  optionalHolidays,
  title = 'Your Current Balance',
}: BalanceProps) {
  const [selectedEmployee] = useState(employees[0]);
  const isNegativeAvailableDays = availableDays < 0;
  const isNegativeConsumedDays = consumedDays < 0;

  return (
    <Styled.Wrapper>
      {!isAdmin ? (
        <Styled.Header>
          <Subtitle variant="s4" fontWeight="medium">
            {title}
          </Subtitle>
        </Styled.Header>
      ) : (
        <Styled.Header>
          {employees.length >= 1 && (
            <Styled.Profile>
              {selectedEmployee.avatar && (
                <Avatar src={selectedEmployee.avatar} sizeVariant="small" />
              )}

              <Subtitle variant="s4" fontWeight="medium">
                {selectedEmployee.label}
              </Subtitle>
            </Styled.Profile>
          )}

          {buttonClick && (
            <Styled.StyledButton
              onClick={buttonClick}
              variant="outlined"
              color="alternative"
              sizeVariant="small"
            >
              {buttonText}
            </Styled.StyledButton>
          )}
        </Styled.Header>
      )}

      <Styled.BalanceDiv>
        <Styled.Div data-testid="rechargeDays">
          <Subtitle variant="s6" fontWeight="regular">
            Recharge Days
          </Subtitle>
          <Paragraph
            size="extralarge"
            fontWeight="semibold"
            colorVariant={isNegativeAvailableDays ? 'error' : 'dark'}
          >
            {daysLabel(availableDays)}
            <span> available</span>
          </Paragraph>
        </Styled.Div>
        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Consumed
          </Subtitle>
          <Paragraph
            size="extralarge"
            fontWeight="semibold"
            colorVariant={isNegativeConsumedDays ? 'error' : 'dark'}
          >
            {daysLabel(consumedDays)}
          </Paragraph>
        </Styled.Div>

        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Next Refill
          </Subtitle>
          <Paragraph size="extralarge" fontWeight="semibold">
            {nextRefill}
          </Paragraph>
        </Styled.Div>
        <Styled.VeticalLine />
        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Optional Holidays
          </Subtitle>

          <Paragraph size="extralarge" fontWeight="semibold">
            {optionalHolidays.toString()}/{MAX_OPTIONAL_DAYS.toString()} used
          </Paragraph>
        </Styled.Div>
      </Styled.BalanceDiv>
    </Styled.Wrapper>
  );
}
