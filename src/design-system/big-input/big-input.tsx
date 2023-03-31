import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Paragraphs } from '../typography/paragraphs/paragraphs';
import * as Styled from './big-input.styled';
import { IBigInputProps } from './types';

export function BigInput({
  required,
  error,
  rows = 3,
  minLength = 50,
  spellCheck = true,
  onTextChange = () => {},
}: IBigInputProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    onTextChange(e.target.value);
    setTouched(true);
  }
  return (
    <div>
      <Styled.Wrapper error={error}>
        <Paragraphs size="small" fontWeight="hair">
          {'Description'}
        </Paragraphs>
        <Styled.InputContainer error={error} touched={touched}>
          <textarea
            placeholder="Write the description"
            required={required}
            rows={rows}
            onChange={onInputChange}
            data-testid="big-input-test"
            minLength={minLength}
            spellCheck={spellCheck}
          />
        </Styled.InputContainer>
        {!!error && (
          <Paragraphs size="extrasmall" fontWeight="light" colorVariant="red">
            Description Required
          </Paragraphs>
        )}
      </Styled.Wrapper>
    </div>
  );
}
