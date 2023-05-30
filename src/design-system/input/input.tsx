import { ChangeEvent, useState } from 'react';
import { Paragraph } from '../typography/paragraph/paragraph';
import * as Styled from './input.styled';
import { IInputProps } from './types';

import { Icon } from '../icon/icon';

export function Input({
  label,
  required,
  value,
  disabled,
  readOnly,
  error,
  warn,
  right,
  placeholder = 'Label',
  type = 'text',
  name,
  iconLeft,
  iconRight,
  hasIconRight = true,
  onTextChange = () => {},
}: IInputProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    onTextChange(e.target.value);
    setTouched(true);
  }

  function IconFactory() {
    let iconName: any;
    let color: any;
    if (iconRight) {
      iconName = iconRight;
      color = `mediumContrast`;
    } else if (right) {
      iconName = `CheckIcon`;
      color = `accepted`;
    } else if (error) {
      iconName = `ExclamationCircleIcon`;
      color = `error`;
    }

    return <Icon color={color} icon={iconName} size="20px" />;
  }

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>
        {label} {required && <span>Required</span>}
      </Styled.Label>
      <Styled.InputContainer
        error={error}
        warn={warn}
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

        {hasIconRight && (
          <Styled.SpanCorrect>{IconFactory()}</Styled.SpanCorrect>
        )}
      </Styled.InputContainer>

      {error && (
        <Paragraph size="extrasmall" fontWeight="light" colorVariant="red">
          {error}
        </Paragraph>
      )}
      {!!warn && (
        <Paragraph size="extrasmall" fontWeight="light" colorVariant="red">
          {warn}
        </Paragraph>
      )}
    </Styled.Wrapper>
  );
}
