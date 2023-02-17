import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';
import { ChangeEvent } from 'react';

export function SelectInput({
  title,
  options,
  error,
  required,
  onSelect,
  disabled,
  ...props
}: ISelectInputProps) {
  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    onSelect(event.target.value);
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
        onChange={handleSelect}
        {...props}
      >
        <option value="">Selecione uma opção...</option>
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
