/* eslint-disable react/no-unescaped-entities */
import { Paragraphs } from '@/design-system';
import * as Styled from './employee-not-found-styled';
export function EmployeeNotFound() {
  return (
    <Styled.Span>
      <Paragraphs size="extrasmall" fontWeight="light" colorVariant="red">
        We could't find anyone with this name. Check your spelling or try a
        different name.
      </Paragraphs>
    </Styled.Span>
  );
}
