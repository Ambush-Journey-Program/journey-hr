import * as Styled from './us-holidays.styled';
import { Title } from '@/design-system';
import { HolidayComponent } from './holiday-component';

export function USHolidays() {
  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper data-testid="USHolidays">
        <Title children="US Holidays" variant="h6" />
      </Styled.HeaderWrapper>

      <Styled.HolidaysDiv>
        <HolidayComponent
          label="New Year's Day (observed)"
          date="Jan 02 Mon, 2023"
        />

        <HolidayComponent label="Memorial Day" date="May 29 Mon, 2023" />

        <HolidayComponent label="Independence Day" date="Jul 04 Tue, 2023" />

        <HolidayComponent label="Labor Day" date="Sep 04 Mon, 2023" />

        <HolidayComponent
          label="Thursday Thanksgiving"
          date="Nov 23 Thu, 2023"
        />

        <HolidayComponent label="Friday Thanksgiving" date="Nov 24 Fri, 2023" />

        <HolidayComponent label="Christmas" date="Dez 25 Mon, 2023" />
      </Styled.HolidaysDiv>
    </Styled.Wrapper>
  );
}
