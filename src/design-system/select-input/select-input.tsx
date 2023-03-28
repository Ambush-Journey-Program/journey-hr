import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';
import { ChangeEvent, useState } from 'react';

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
        onChange={(e) => {
          handleSelectEvent(e);
        }}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Styled.Select>
      {!!error && <Styled.SpanError>{error}</Styled.SpanError>}
    </Styled.Wrapper>
  );
}
