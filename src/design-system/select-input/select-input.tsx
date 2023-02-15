import { Wrapper } from './select-input.styled';
import { ISelectInputProps } from './types';
import * as Styled from './select-input.styled';

export function SelectInput({
  placeholder,
  title,
  options,
}: ISelectInputProps) {
  function handleSelect(selectedValue: string) {
    console.log({ selectedValue });
  }

  return (
    <>
      <Styled.Wrapper>
        <legend>{title}</legend>
        <Styled.Select
          onChange={(e) => {
            handleSelect(e.target.value);
          }}
        >
          <Styled.Option value="0">Selecione uma opção...</Styled.Option>
          {options.map((option) => (
            <Styled.Option key={option.value} value={option.value}>
              {option.label}
            </Styled.Option>
          ))}
        </Styled.Select>
      </Styled.Wrapper>
    </>
  );
}
