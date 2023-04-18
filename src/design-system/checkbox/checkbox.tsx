import { type CheckboxProps } from './types';
import * as Styled from './checkbox.styled';
import { Paragraphs, Subtitle } from '../typography';

export function CheckBox({
  onChange,
  isChecked,
  disabled = false,
  label,
  description,
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
        <Subtitle variant="s6">{label}</Subtitle>

        <Paragraphs size="medium" fontWeight="hair">
          {description}
        </Paragraphs>
      </Styled.StyledDiv>
    </Styled.Label>
  );
}
