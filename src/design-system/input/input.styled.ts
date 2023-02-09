import styled, { css } from "styled-components"

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: mundial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #5c4c73;
  margin-top: 37px;
`

export const Input = styled.input`
  width: 391px;
  height: 52px;
  font-family: mundial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #cdc5d9;
  border: 1px solid #cdc5d9;
  border-radius: 12px;
  padding-left: 20px;
  margin-top: 4px;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px #5c4c73;
  }
  &:active {
    outline: none;
    box-shadow: 0 0 2px #9b9ad6;
  }
`
