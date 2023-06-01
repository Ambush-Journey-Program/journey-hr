import { ChangeEvent, useState } from 'react';
import { Paragraph } from '../typography/paragraph/paragraph';
import * as Styled from './input.styled';
import { IInputProps } from './types';

import { Icon } from '../icon/icon';

export function Input({
  label,
  required,
  value,
  disabled,
  readOnly,
  error,
  right,
  placeholder = 'Label',
  type = 'text',
  name,
  iconLeft,
  iconRight,
  hasIconRight,
  onTextChange = () => {},
  ...props
}: IInputProps) {
  const [touched, setTouched] = useState(false);
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    onTextChange(e.target.value);
    setTouched(true);
  }

  function IconFactory() {
    let iconName: any;
    let color: any;
    if (iconRight) {
      iconName = iconRight;
      color = `mediumContrast`;
    } else if (right) {
      iconName = `CheckIcon`;
      color = `accepted`;
    } else if (error) {
      iconName = `ExclamationCircleIcon`;
      color = `error`;
    }

    return <Icon color={color} icon={iconName} size="20px" />;
  }

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>
        {label} {required && <span>Required</span>}
      </Styled.Label>
      <Styled.InputContainer
        error={error}
        disabled={disabled}
        touched={touched}
      >
        {iconLeft && (
          <Icon color="lowestContrast" icon={iconLeft} size="20px" />
        )}

        <input
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onInputChange}
          data-testid="input-test"
          type={type}
        />
        {!!right && (
          <Styled.SpanCorrect>
            <Icon color="accepted" icon="CheckIcon" size="20px" />
          </Styled.SpanCorrect>
        )}
        {error && (
          <Styled.Span>
            <Icon
              color="error"
              size="16px"
              icon="ExclamationCircleIcon"
              className="alert"
              data-testid="Alert"
            />
          </Styled.Span>
        )}
      </Styled.InputContainer>
      {!!error && (
        <Paragraph size="extrasmall" fontWeight="light" colorVariant="red">
          {error}
        </Paragraph>
      )}
    </Styled.Wrapper>
  );
}
