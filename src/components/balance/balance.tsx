import { Avatar, Paragraphs, Subtitle } from '@/design-system';
import * as Styled from './balance.styled';
import { employees as employeesMock } from './mocking/holidays';
import { BalanceProps } from './types';

export function Balance({
  employees = employeesMock,
  buttonClick,
  buttonText,
  currentUser = false,
}: BalanceProps) {
  return (
    <Styled.Wrapper>
      {!currentUser && (
        <Styled.Header>
          {employees.length >= 1 && (
            <Styled.Profile>
              {employees[0].avatar && (
                <Avatar src={employees[0].avatar} sizeVariant="small" />
              )}

              <Subtitle variant={'s4'} fontWeight={'medium'}>
                {employees[0].label}
              </Subtitle>
            </Styled.Profile>
          )}

          {buttonClick && (
            <Styled.btn
              onClick={buttonClick}
              variant="outlined"
              color="alternative"
              sizeVariant="small"
            >
              {buttonText}
            </Styled.btn>
          )}
        </Styled.Header>
      )}

      {currentUser && (
        <Styled.Header>
          <Subtitle variant={'s4'} fontWeight={'medium'}>
            Your Current Balance
          </Subtitle>
        </Styled.Header>
      )}
      <Styled.BalanceDiv>
        <Styled.Div>
          <Subtitle variant="s6" fontWeight="regular">
            Recharge Days
          </Subtitle>
          <Paragraphs size="extralarge" fontWeight="semibold">
            20 days <span>available</span>
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
