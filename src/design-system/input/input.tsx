import { ChangeEvent, useState } from 'react';
import { Paragraph } from '../typography/paragraph/paragraph';
import * as Styled from './input.styled';
import { IInputProps } from './types';

import { Icon } from '../icon/icon';
function getIconBasedOn(type: string) {
  if (type === 'date') {
    return 'CalendarIcon';
  }
  if (type === 'search') {
    return 'UsersIcon';
  }

  return 'CubeIcon';
}

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

  onTextChange = () => {},
}: IInputProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    onTextChange(e.target.value);
    setTouched(true);
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
        <Icon color="lowestContrast" icon={getIconBasedOn(type)} size="20px" />
        <input
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onInputChange}
          data-testid="input-test"
        />
        {!!right && (
          <Styled.SpanCorrect>
            <Icon color="accepted" icon="CheckIcon" size="20px" />
          </Styled.SpanCorrect>
        )}
        {error && (
          <Styled.Span>
            <Icon
              color="error"
              size="16px"
              icon="ExclamationCircleIcon"
              className="alert"
              data-testid="Alert"
            />
          </Styled.Span>
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
