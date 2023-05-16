import { ChangeEvent, useState } from 'react';
import { Paragraph } from '../typography/paragraph/paragraph';
import * as Styled from './input.styled';
import { IInputProps } from './types';
import * as Icons from '@heroicons/react/24/outline';

export function Input({
  label,
  required,
  value,
  disabled,
  readOnly,
  error,
  warn,
  right,
  placeholder,
  type = 'text',
  name,
  placeholder = 'Label',
  onTextChange = () => {},
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
        warn={warn}
        disabled={disabled}
        touched={touched}
      >
        <Styled.calendarIcon>
          <Icons.CalendarDaysIcon className="alert" data-testid="Alert" />
        </Styled.calendarIcon>
        <input
          type={type}
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
            <Icons.CheckIcon className="alert" data-testid="Alert" />
          </Styled.SpanCorrect>
        )}
        {(!!warn || !!error) && (
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
      {!!warn && (
        <Paragraph size="extrasmall" fontWeight="light" colorVariant="red">
          {warn}
        </Paragraph>
      )}
    </Styled.Wrapper>
  );
}
