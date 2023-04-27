import { Avatar, Paragraphs, Subtitle } from '@/design-system';
import * as Styled from './balance.styled';
import { employees as employeesMock } from './mocking/holidays';
import { BalanceProps } from './types';
import { useState } from 'react';

export function Balance({
  employees = employeesMock,
  buttonClick,
  buttonText,
  isAdmin = false,
  availableDays,
}: BalanceProps) {
  const [selectedEmployee] = useState(employees[0]);
  const isNegativeAvailableDays = availableDays < 0;
  const availableDaysLabel =
    availableDays === 1 || availableDays === -1 ? 'day' : 'days';

  return (
    <Styled.Wrapper>
      {!isAdmin ? (
        <Styled.Header>
          <Subtitle variant="s4" fontWeight="medium">
            Your Current Balance
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
          <Paragraphs
            size="extralarge"
            fontWeight="semibold"
            colorVariant={isNegativeAvailableDays ? 'error' : 'dark'}
          >
            {availableDays.toString()} {availableDaysLabel}
            <span> available</span>
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
        {/* <Styled.VeticalLine></Styled.VeticalLine> */}
        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Optional Holidays
          </Subtitle>

          <Paragraphs size="extralarge" fontWeight="semibold">
            0/4 used
          </Paragraphs>
        </Styled.Div>
      </Styled.BalanceDiv>
    </Styled.Wrapper>
  );
}
