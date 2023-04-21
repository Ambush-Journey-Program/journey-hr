import { ChangeEvent, useEffect, useState } from 'react';
import { Label } from '../input/input.styled';
import { Paragraphs } from '../typography/paragraphs/paragraphs';
import * as Styled from './text-area.styled';
import { TextAreaProps } from './types';

export function TextArea({
  rows = 3,
  spellCheck,
  placeholder = 'Write the description',
  onTextChange = () => {},
  required = false,
  touched = false,
  label,
  ...props
}: TextAreaProps) {
  const [internalTouched, setTouched] = useState(false);
  const [error, setError] = useState('Description Required');

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
      setError('Description Required');
      return;
    }
    if (Boolean(props.minLength) && props.minLength >= value.length) {
      setError(`Minimal length must be greater than ${props.minLength}`);
    }
  }

  return (
    <Styled.TextAreaContainer>
      <Styled.Label htmlFor={`textArea-${label}`}>
        {label} {required && <span>Required</span>}
      </Styled.Label>
      <Styled.TextArea
        id={`textArea-${label}`}
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
  );
}
