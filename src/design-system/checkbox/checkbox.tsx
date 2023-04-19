import { CheckboxProps } from './types';
import * as Styled from './checkbox.styled';
import { Paragraphs, Subtitle } from '../typography';

export function CheckBox({
  onChange,
  isChecked,
  disabled = false,
  label,
  description,
  labelFontWeight = 'semibold',
  labelSize = 'medium',
}: CheckboxProps) {
  return (
    <Styled.Label disabled={disabled}>
      <Styled.CheckBox
        data-testid="checkbox-test"
        onChange={onChange}
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
      />

      <Styled.StyledDiv>
        <Paragraphs size={labelSize} fontWeight={labelFontWeight}>
          {label}
        </Paragraphs>

        <Paragraphs size="default" fontWeight="semihair">
          {description}
        </Paragraphs>
      </Styled.StyledDiv>
    </Styled.Label>
  );
}
