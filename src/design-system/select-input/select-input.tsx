import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';
import { ChangeEvent } from 'react';

export function SelectInput({
  title,
  options,
  required,
  disabled,
  error,
  optional,
}: ISelectInputProps) {
  // function handleSelect(selectedValue: string) {
  //   console.log({ selectedValue });
  // }
  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
  }
  return (
    <>
      <Styled.Wrapper error={error}>
        <Styled.Legend>
          {title}
          {!required && <Styled.SpanRequired>Optional</Styled.SpanRequired>}
        </Styled.Legend>
        <Styled.Select
          error={error}
          onChange={handleSelect}
          required={required}
          disabled={disabled}
        >
          <option value="0">Selecione uma opção...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Styled.Select>
        {!!error && <Styled.SpanError>{error}</Styled.SpanError>}
      </Styled.Wrapper>
    </>
  );
}
