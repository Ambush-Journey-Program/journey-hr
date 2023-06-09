import * as Styled from './label.styled';
import { LabelProps } from './types';

export function Label({
  required,
  name,
  label,
}: LabelProps) {
  return (
  <Styled.Label htmlFor={name}>
    {label} {required && <span>Required</span>}
  </Styled.Label>
  );
}
