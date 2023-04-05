import { ChangeEvent, useEffect, useState } from 'react';
import { Paragraphs } from '../typography/paragraphs/paragraphs';
import * as Styled from './text-area.styled';
import { TextAreaProps } from './types';

export function TextArea({
  rows = 3,
  spellCheck,
  placeholder = 'Write the description',
  onTextChange = () => {},
  required = true,
  touched = false,

  ...props
}: TextAreaProps) {
  const [internalTouched, setTouched] = useState(touched);
  const [error, setError] = useState('Required');
  useEffect(() => {
    setTouched(touched);
  }, [touched]);
  function onInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    onTextChange(e.target.value);
    setTouched(true);
    handleValidationError(e.target.value);
  }

  function handleValidationError(value: string) {
    if (value.length === 0) {
      return setError('Description Required');
    }
    if (props.minLength && props.minLength >= value.length) {
      return setError('Minimal length must be greater than ' + props.minLength);
    }
  }

  return (
    <>
      <Paragraphs size="small" fontWeight="hair">
        Description
      </Paragraphs>
      <Styled.TextAreaContainer>
        <Styled.TextArea
          placeholder={placeholder}
          internalTouched={internalTouched}
          onChange={onInputChange}
          rows={rows}
          spellCheck={spellCheck}
          required={required}
          {...props}
        />

        {internalTouched && (
          <Paragraphs size="extrasmall" fontWeight="light" colorVariant="red">
            {error}
          </Paragraphs>
        )}
      </Styled.TextAreaContainer>
    </>
  );
}
