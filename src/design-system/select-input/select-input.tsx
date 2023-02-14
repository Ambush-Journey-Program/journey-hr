import { Wrapper } from './select-input.styled'
import { ISelectInputProps } from './types'



export function SelectInput({
  placeholder,title, options
}: ISelectInputProps){
  return (
    <Wrapper>
      <legend>{title}</legend>
      <select>
        
      {/* <div  {options.map(option => (key={option.value}></div>
          <span>{option.label}</span>
        ))}
*/}
      </select> 
    </Wrapper>
  )

}
