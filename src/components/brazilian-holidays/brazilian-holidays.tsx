import { CheckBox } from '@/design-system/checkbox/checkbox';
import * as Styled from './brazilian-holidays.styled';
import { Subtitle, Title } from '@/design-system';

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
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Carnival Monday"
          description="Feb 20 Mon, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Carnival Tuesday"
          description="Feb 21 Tue, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Good Friday"
          description="Apr 21 Fri, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Tiradentes Day"
          description="Nov 15 Thu, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Brazilian Labor Day"
          description="May 01 Mon, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Corpus Christi"
          description="Jun 08 Thu, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Our Lady of Aparecida / Children's Day"
          description="Oct 12 Thu, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Brazilian Independence Day"
          description="Sep 07 Thu, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="All Soul's Day"
          description="Nov 02 Thu, 2023"
          labelFontWeight="semibold"
        />
        <CheckBox
          onChange={() => {}}
          isChecked={false}
          label="Brazilian Republic Proclamation Day"
          description="Nov 15 Thu, 2023"
          labelFontWeight="semibold"
        />
      </Styled.CheckboxDiv>
    </Styled.Wrapper>
  );
}
