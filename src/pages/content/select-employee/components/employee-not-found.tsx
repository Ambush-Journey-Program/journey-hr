/* eslint-disable react/no-unescaped-entities */
import { Icon, Paragraph } from '@/design-system';
import * as Styled from './employee-not-found-styled';
export function EmployeeNotFound() {
  return (
    <Styled.Main>
      <Styled.Div>
        <Icon color="lowContrast" icon="UserIcon"/>
        <Paragraph size="small" fontWeight="light" colorVariant="lowContrast">
          No matches found
        </Paragraph>
      </Styled.Div>
    </Styled.Main>
  );
}
