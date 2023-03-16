import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';
import { ChangeEvent } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

export function SelectInput({
  title,
  options,
  error,
  required,
  onSelect,
  disabled,
  placeholder,
  icon,
  ...props
}: ISelectInputProps) {
  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    onSelect(event.target.value);
  }

  const buttonIcon = icon ? <ChevronDoubleDownIcon /> : undefined;

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
        <option value="">
          {placeholder ?? 'Selecione uma opção...'} {buttonIcon}
        </option>
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
