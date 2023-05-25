import { ChangeEvent, useState } from 'react';
import { Paragraph } from '../typography/paragraph/paragraph';
import * as Styled from './input.styled';
import { IInputProps } from './types';
<<<<<<< HEAD
import * as Icons from '@heroicons/react/24/outline';
=======

import { Icon } from '../icon/icon';
function getIconBasedOn(type: string) {
  if (type === 'date') {
    return 'CalendarIcon';
  }

  return 'CubeIcon';
}
>>>>>>> 2e81d9d (refacator: created the function to change icons)

export function Input({
  label,
  required,
  value,
  disabled,
  readOnly,
  error,
  right,
  placeholder = 'Label',
  type = 'text',
  name,

  onTextChange = () => {},
  ...props
}: IInputProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    onTextChange(e.target.value);
    setTouched(true);
  }

  return (
    <Styled.Wrapper error={error}>
      <Styled.Label htmlFor={name}>
        {label} {required && <span>Required</span>}
      </Styled.Label>
      <Styled.InputContainer
        error={error}
        disabled={disabled}
        touched={touched}
      >
        <Styled.calendarIcon>
          <Icons.CalendarDaysIcon className="alert" data-testid="Alert" />
        </Styled.calendarIcon>
        <input
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onInputChange}
          data-testid="input-test"
          {...props}
        />
        {!!right && (
          <Styled.SpanCorrect>
            <Icons.CheckIcon className="alert" data-testid="Alert" />
          </Styled.SpanCorrect>
        )}
        {!!error && (
          <Styled.Span>
            <Icons.ExclamationCircleIcon
              className="alert"
              data-testid="Alert"
            />
          </Styled.Span>
        )}
      </Styled.InputContainer>
      {!!error && (
        <Paragraph size="extrasmall" fontWeight="light" colorVariant="red">
          {error}
        </Paragraph>
      )}
    </Styled.Wrapper>
  );
}
