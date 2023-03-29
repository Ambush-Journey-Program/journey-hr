import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';
import { ChangeEvent, useState } from 'react';
import { Paragraphs } from '../typography/paragraphs/paragraphs';

export function SelectInput({
  title,
  options,
  error,
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
        <Styled.SpanError>
          <Paragraphs size="extrasmall" fontWeight="light" colorVariant="red">
            {error}
          </Paragraphs>
        </Styled.SpanError>
      )}
    </Styled.Wrapper>
  );
}
