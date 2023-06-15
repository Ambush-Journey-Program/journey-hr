import { ChangeEvent, useState } from 'react';
import { Paragraph } from '../typography/paragraph/paragraph';
import * as Styled from './input.styled';
import { Colors, InputProps } from './types';
import { Icon } from '../icon/icon';
import { Label } from '../label';

export function Input({
  label = 'Select Employee',
  required,
  value,
  disabled,
  readOnly,
  error,
  right,
  placeholder = 'Label',
  type = 'text',
  iconLeft,
  iconRight,
  hasIconRight,
  onTextChange,
}: InputProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    onTextChange(e.target.value);
    setTouched(true);
  }

  function getIconProperties() {
    let iconName: typeof iconLeft;
    let color: Colors;
    if (error) {
      iconName = 'ExclamationCircleIcon';
      color = 'error';
    } else if (right) {
      iconName = 'CheckIcon';
      color = 'accepted';
    } else if (iconRight) {
      iconName = iconRight;
      color = 'mediumContrast';
    } else {
      iconName = null;
      color = null;
    }
    return { iconName, color };
  }

  function IconFactory() {
    const { iconName, color } = getIconProperties();

    if (!hasIconRight || !iconName || !color) {
      return null;
    }

    return (
      <Styled.SpanCorrect>
        <Icon color={color} icon={iconName} size="16px" />
      </Styled.SpanCorrect>
    );
  }

  return (
    <Styled.Wrapper>
      <Label label={label} required={required} />
      <Styled.InputContainer
        error={!!error}
        disabled={disabled}
        touched={touched}
      >
        {iconLeft && (
          <Icon color="lowestContrast" icon={iconLeft} size="20px" />
        )}
        <input
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onInputChange}
          data-testid="input-test"
          type={type}
        />
        {IconFactory()}
      </Styled.InputContainer>
      {error && (
        <Paragraph size="extrasmall" fontWeight="light" colorVariant="red">
          {error}
        </Paragraph>
      )}
    </Styled.Wrapper>
  );
}
