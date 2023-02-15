import { Wrapper } from './select-input.styled'
import { ISelectInputProps } from './types'
import * as Styled from './select-input.styled';

export function SelectInput({
  placeholder,title, options
}: ISelectInputProps){
  return (
    <>
      <Styled.Wrapper>
        <legend>{title}</legend>
        <Styled.Select>
          <Styled.Option>teste1</Styled.Option>
          <Styled.Option>teste1</Styled.Option>
          <Styled.Option>teste1</Styled.Option>
        
          {/* {options.map(option => (
            key={option.value}
              <span>{option.label}</span>
            ))} */}
        </Styled.Select>
      </Styled.Wrapper>
    </>

  )
}
