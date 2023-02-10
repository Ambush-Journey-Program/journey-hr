import styled, { css } from "styled-components"

const notEditableInput = css`
  border-color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.white};
`
export const Wrapper = styled.div`
  width: 391px;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: mundial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.color.veryDarkPurple};
  margin-top: 37px;
`
type DivContainerProps = {
  readOnly?: boolean
}

export const InputContainer = styled.div<DivContainerProps>`
  display: flex;
  align-items: center;
  width: 391px;
  height: 52px;
  font-family: mundial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: ${(props) => props.theme.color.purple};
  border: 1px solid ${(props) => props.theme.color.purple};
  border-radius: 12px;
  padding-left: 20px;
  margin-top: 4px;
  ${({ readOnly }) => readOnly && notEditableInput}

  & input {
    padding: 14px 20px;
    width: 329px;
    outline: none;
    border: none;
    ${({ readOnly }) => readOnly && notEditableInput}
  }
`
