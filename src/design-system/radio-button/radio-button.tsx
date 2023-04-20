import * as Styled from './radio-button.styled';
import { RadioButtonProps } from './types';

export function RadioButton({
  value,
  fontWeight = 'hair',
  disabled = false,
  defaultChecked = false,
  label,
  name,
}: RadioButtonProps) {
  function optionChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }
  return (
    <Styled.containerInput>
      <Styled.radioInput
        type="radio"
        name={name}
        id={value}
        value={value}
        defaultChecked={defaultChecked}
        onChange={optionChange}
        disabled={disabled}
      />
      <Styled.containerLabel htmlFor={value} disabled={disabled}>
        <Styled.paragraphLabel
          colorVariant="dark"
          size="medium"
          fontWeight={fontWeight}
        >
          {label}
        </Styled.paragraphLabel>
      </Styled.containerLabel>
    </Styled.containerInput>
  );
}
