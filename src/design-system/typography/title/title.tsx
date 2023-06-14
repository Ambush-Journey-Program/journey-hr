import * as Styled from './title.styled';
import { TitleProps } from './types';

export function Title ({ variant, children }: TitleProps) {
  return (
    <Styled.Title variant={variant} as={variant}>
      {children}
    </Styled.Title>
  );
}
