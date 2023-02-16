import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';

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
  function handleSelect(event: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  return (
    <>
      <Styled.Wrapper error={error}>
        <Styled.Legend optional={optional}>
          {title} <span>optional</span>
        </Styled.Legend>
        <Styled.Select
          error={error}
          onChange={handleSelect}
          // {...props}
          required={required}
          disabled={disabled}
        >
          <Styled.Option value="0">Selecione uma opção...</Styled.Option>
          {options.map((option) => (
            <Styled.Option key={option.value} value={option.value}>
              {option.label}
            </Styled.Option>
          ))}
        </Styled.Select>
        {!!error && <span>{error}</span>}
      </Styled.Wrapper>
    </>
  );
}
