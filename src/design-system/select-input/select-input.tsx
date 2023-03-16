import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';
import { ChangeEvent } from 'react';

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
  }

  return (
    <Styled.Wrapper>
      <Styled.Legend>
        {title}
        {!required && <Styled.SpanRequired>Optional</Styled.SpanRequired>}
      </Styled.Legend>
      <Styled.Select
        data-testid="input-select-test"
        disabled={disabled}
        error={error}
        onChange={handleSelectEvent}
        {...props}
      >
        <option value="">{placeholder ?? 'Selecione uma opção...'}</option>
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
