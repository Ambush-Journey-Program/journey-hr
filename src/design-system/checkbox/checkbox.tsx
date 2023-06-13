import { CheckboxProps } from './types';
import * as Styled from './checkbox.styled';
import { Paragraph } from '../typography';

export function CheckBox({
  onChange,
  isChecked = false,
  disabled = false,
  label,
  description,
  labelFontWeight = 'semibold',
}: CheckboxProps) {
  return (
    <Styled.Label disabled={disabled}>
      <Styled.CheckBox
        data-testid="checkbox-test"
        onChange={onChange}
        type="checkbox"
        defaultChecked={isChecked}
        disabled={disabled}
      />

      <Styled.StyledDiv>
        <Paragraph size="default" fontWeight={labelFontWeight}>
          {label}
        </Paragraph>

        <Paragraph size="default" fontWeight="semihair">
          {description}
        </Paragraph>
      </Styled.StyledDiv>
    </Styled.Label>
  );
}
