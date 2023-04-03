import { ChangeEvent, useState } from 'react';
import { Paragraphs } from '../typography/paragraphs/paragraphs';
import * as Styled from './text-area.styled';
import { TextAreaProps } from './types';

export function TextArea({
  error,
  rows = 3,
  spellCheck = true,
  placeholder = 'Write the description',
  onTextChange = () => {},
  ...props
}: TextAreaProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    onTextChange(e.target.value);
    setTouched(true);
  }
  return (
    <Styled.Wrapper error={error}>
      <Paragraphs size="small" fontWeight="hair">
        {'Description'}
      </Paragraphs>
      <Styled.TextAreaContainer error={error} touched={touched}>
        <Styled.TextArea
          placeholder={placeholder}
          onChange={onInputChange}
          {...props}
        />
      </Styled.TextAreaContainer>
      {!!error && (
        <Paragraphs size="extrasmall" fontWeight="light" colorVariant="red">
          Description Required
        </Paragraphs>
      )}
    </Styled.Wrapper>
  );
}
