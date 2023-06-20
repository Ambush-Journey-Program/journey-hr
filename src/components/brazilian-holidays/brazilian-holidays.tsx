import { CheckBox } from '@/design-system/checkbox/checkbox';
import * as Styled from './brazilian-holidays.styled';
import { Subtitle, Title } from '@/design-system';
import { brazilianHolidaysConst } from './mocking-holidays';

export function BrazilianHolidays() {
  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper data-testid="brazilianHolidays">
        <Title children="Brazilian Optional Holidays" variant="h6" />
        <Subtitle
          children="Select dates for optional holidays."
          variant="s6"
          fontWeight="regular"
        />
      </Styled.HeaderWrapper>

      <Styled.CheckboxDiv>
        {brazilianHolidaysConst.map((holiday) => (
          <CheckBox
            onChange={() => {}}
            isChecked={holiday.isChecked}
            label={holiday.label}
            description={holiday.date}
            labelFontWeight="semibold"
          />
        ))}
      </Styled.CheckboxDiv>
    </Styled.Wrapper>
  );
}
