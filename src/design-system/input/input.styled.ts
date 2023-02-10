import styled, { css } from "styled-components"

const disabledInput = css`
  background-color: ${(props) => props.theme.color.white};
`
const spanError = css`
  display: block;
  color: ${(props) => props.theme.color.red};
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`

const errorDisplay = css`
  color: ${(props) => props.theme.color.red};
`

export const Wrapper = styled.div<DivContainerProps>`
  width: 391px;
  ${({ error }) => error && spanError}
`

export const Label = styled.label<DivContainerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: mundial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.color.veryDarkPurple};
  margin-top: 37px;
`

export const Input = styled.label`
  font-family: mundial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`
type DivContainerProps = {
  disabled?: boolean
  error?: string
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
  border: 1px solid ${(props) => props.theme.color.disable};
  border-radius: 12px;
  padding-left: 20px;
  margin-top: 4px;
  ${({ error }) => error && errorDisplay}
  &:focus-within {
    outline: none;
    box-shadow: 0 0 2px ${(props) => props.theme.color.labelColor};
    border: 1px solid red;
  }
  & input {
    padding: 14px 20px;
    width: 329px;
    outline: none;
    border: none;
    ${({ error }) => error && errorDisplay}
  }
`
