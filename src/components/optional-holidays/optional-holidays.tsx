import { CheckBox } from '@/design-system/checkbox/checkbox';
import * as Styled from './optional-holidays.styled';
import { Subtitle, Title } from '@/design-system';

export function OptionalHolidays() {
  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper data-testid="optionalHolidays">
        <Title children="Optional Holidays" variant={'h6'} />
        <Subtitle
          children="You can save employee's recharge days by adding optional holidays to their Time Off."
          variant="s6"
          fontWeight="regular"
        />
      </Styled.HeaderWrapper>

      <Styled.CheckboxDiv>
        <CheckBox
          onChange={() => {}}
          isChecked={true}
          label="All Soul's Day"
          description="Nov 02 Mon, 2023"
          labelFontWeight="semibold"
          labelSize="default"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={true}
          label="Brazilian Republic Proclamation Day"
          description="Nov 15 Thu, 2023"
          labelFontWeight="semibold"
          labelSize="default"
        />
      </Styled.CheckboxDiv>
    </Styled.Wrapper>
  );
}
