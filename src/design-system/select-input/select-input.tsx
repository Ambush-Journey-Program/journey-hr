import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';
import { ChangeEvent, useState } from 'react';
import { Paragraph } from '../typography/paragraph/paragraph';

export function SelectInput({
  title,
  options,
  error,
  warn,
  required,
  handleSelect,
  disabled,
  placeholder,
  ...props
}: ISelectInputProps) {
  function handleSelectEvent(event: ChangeEvent<HTMLSelectElement>) {
    handleSelect(event.target.value);
    setTouched(true);
  }
  const [touched, setTouched] = useState(false);
  return (
    <Styled.Wrapper>
      <Styled.Legend>
        {title}
        {!required && <Styled.SpanRequired>Optional</Styled.SpanRequired>}
      </Styled.Legend>
      <Styled.Select
        touched={touched}
        data-testid="input-select-test"
        disabled={disabled}
        error={error}
        warn={warn}
        onChange={handleSelectEvent}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Styled.Select>
      {!!error && (
        <Styled.Span>
          <Paragraph size="extrasmall" fontWeight="light" colorVariant="red">
            {error}
          </Paragraph>
        </Styled.Span>
      )}
      {!!warn && (
        <Styled.Span>
          <Paragraph size="extrasmall" fontWeight="light" colorVariant="purple">
            {warn}
          </Paragraph>
        </Styled.Span>
      )}
    </Styled.Wrapper>
  );
}
